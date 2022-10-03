import { LoadJobRepository } from '../../protocols/db/job/load-job-repository'
import { JobModel } from '../../../domain/models/job'
import { DbLoadJobs } from './db-load-jobs'

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

describe('DbLoadJobs', () => {
  test('Should call LoadJobsRepository', async () => {
    class LoadJobsRepositoryStub implements LoadJobRepository {
      async loadAll (): Promise<JobModel[]> {
        return new Promise<JobModel[]>((resolve) => resolve(makeFakeJobs()))
      }
    }

    const loadJobsRepositorystub = new LoadJobsRepositoryStub()
    const loadAllSpy = jest.spyOn(loadJobsRepositorystub, 'loadAll')
    const sut = new DbLoadJobs(loadJobsRepositorystub)
    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })
})
