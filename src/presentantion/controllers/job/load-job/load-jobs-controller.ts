import { Controller, HttpRequest, HttpResponse, LoadJobs } from './load-jobs-controller-protocols'

export class LoadJobsController implements Controller {
  constructor (private readonly loadJobs: LoadJobs) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadJobs.load()
    return { statusCode: 200, body: {} }
  }
}
