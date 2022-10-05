import { Router } from 'express'
import { makeLoadJobsController } from '../factories/load-jobs-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
  router.get('/jobs', adaptRoute(makeLoadJobsController()))
}
