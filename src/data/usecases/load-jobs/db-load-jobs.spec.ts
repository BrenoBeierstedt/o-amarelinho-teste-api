import { LoadJobRepository } from '../../protocols/db/job/load-job-repository'
import { JobModel } from '../../../domain/models/job'
import { DbLoadJobs } from './db-load-jobs'

const makeFakeJobs = (): JobModel[] => {
  return [{
    id: 1,
    title: 'some title',
    description: 'some description',
    companyName: 'some company name',
    cityName: 'some city name',
    stateName: 'some state name',
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
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
  sut: DbLoadJobs
  loadJobsRepositorystub: LoadJobRepository
}

const makeLoadJobsRepository = (): LoadJobRepository => {
  class LoadJobsRepositoryStub implements LoadJobRepository {
    async loadAll (): Promise<JobModel[]> {
      return new Promise<JobModel[]>((resolve) => resolve(makeFakeJobs()))
    }
  }
  return new LoadJobsRepositoryStub()
}

const makeSut = (): SutTypes => {
  const loadJobsRepositorystub = makeLoadJobsRepository()
  const sut = new DbLoadJobs(loadJobsRepositorystub)
  return { sut, loadJobsRepositorystub }
}

describe('DbLoadJobs', () => {
  test('Should call LoadJobsRepository', async () => {
    const { sut, loadJobsRepositorystub } = makeSut()
    const loadAllSpy = jest.spyOn(loadJobsRepositorystub, 'loadAll')
    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })

  test('Should return a list of Jobs on success', async () => {
    const { sut } = makeSut()
    const jobs = await sut.load()
    expect(jobs).toEqual(makeFakeJobs())
  })

  test('Should throw if LoadJobsRepository throws', async () => {
    const { sut, loadJobsRepositorystub } = makeSut()
    jest.spyOn(loadJobsRepositorystub, 'loadAll').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
