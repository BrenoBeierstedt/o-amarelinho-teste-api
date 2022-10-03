import { LoadJobs } from '../../../domain/usecases/load-jobs'
import { JobModel } from '../../../domain/models/job'
import { LoadJobRepository } from '../../protocols/db/job/load-job-repository'

export class DbLoadJobs implements LoadJobs {
  constructor (private readonly loadJobsRepository: LoadJobRepository) {}
  async load (): Promise<JobModel[]> {
    const jobs = await this.loadJobsRepository.loadAll()
    return jobs
  }
}
