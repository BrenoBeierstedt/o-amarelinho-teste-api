import { Controller, HttpRequest, HttpResponse, LoadJobs } from './load-jobs-controller-protocols'
import { noContent, ok, serverError } from '../../../helpers/http-helper'

export class LoadJobsController implements Controller {
  constructor (private readonly loadJobs: LoadJobs) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const jobs = await this.loadJobs.load()
      return jobs.length ? ok(jobs) : noContent()
    } catch (e) {
      return serverError()
    }
  }
}
