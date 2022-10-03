import { JobModel } from '../../../../domain/models/job'

export interface LoadJobRepository {
  loadAll: () => Promise<JobModel[]>
}
