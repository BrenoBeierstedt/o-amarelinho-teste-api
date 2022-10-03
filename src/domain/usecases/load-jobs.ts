import { JobModel } from '../models/job'
export interface LoadJobs {
  load: () => Promise<JobModel[]>
}
