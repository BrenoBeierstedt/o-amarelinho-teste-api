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

describe('LoadJobs Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })
  test('Should call LoadJobs', async () => {
    class LoadJobsStub implements LoadJobs {
      async load (): Promise<JobModel[]> {
        return new Promise(resolve => resolve(makeFakeJobs()))
      }
    }
    const loadJobsStub = new LoadJobsStub()
    const loadSpy = jest.spyOn(loadJobsStub, 'load')
    const sut = new LoadJobsController(loadJobsStub)
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })
})
