import { prisma } from '../../../../main/config/prisma'
import { LoadJobRepository } from '../../../../data/protocols/db/job/load-job-repository'
import { JobModel } from '../../../../domain/models/job'

export class JobPrismaRepository implements LoadJobRepository {
  async loadAll (): Promise<JobModel[]> {
    return await prisma.job.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    })
  }
}
