import { LoadJobsController } from '../../presentantion/controllers/job/load-job/load-jobs-controller'
import { DbLoadJobs } from '../../data/usecases/load-jobs/db-load-jobs'
import { JobPrismaRepository } from '../../infra/db/prisma/job/job-prisma-repository'

export const makeLoadJobsController = (): LoadJobsController => {
  const jobPrismaRepository = new JobPrismaRepository()
  const dbLoadJobs = new DbLoadJobs(jobPrismaRepository)
  return new LoadJobsController(dbLoadJobs)
}
