import { LoadJobsController } from './load-jobs-controller'
import { LoadJobs, JobModel } from './load-jobs-controller-protocols'
import MockDate from 'mockdate'

const makeFakeJobs = (): JobModel[] => {
  return [{
    id: 'id',
    title: 'some title',
    description: 'some description',
    companyName: 'some company name',
    cityName: 'some city name',
    stateName: 'some state name',
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 'other_id',
    title: 'other title',
    description: 'other description',
    companyName: 'other company name',
    cityName: 'other city name',
    stateName: 'other state name',
    updatedAt: new Date(),
    createdAt: new Date()
  }
  ]
}

interface SutTypes {
  sut: LoadJobsController
  loadJobsStub: LoadJobs
}

const makeLoadJobs = (): LoadJobs => {
  class LoadJobsStub implements LoadJobs {
    async load (): Promise<JobModel[]> {
      return new Promise(resolve => resolve(makeFakeJobs()))
    }
  }
  return new LoadJobsStub()
}

const makeSut = (): SutTypes => {
  const loadJobsStub = makeLoadJobs()
  const sut = new LoadJobsController(loadJobsStub)
  return { sut, loadJobsStub }
}

describe('LoadJobs Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })
  test('Should call LoadJobs', async () => {
    const { sut, loadJobsStub } = makeSut()
    const loadSpy = jest.spyOn(loadJobsStub, 'load')
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })
})
