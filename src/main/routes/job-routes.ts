import { Router } from 'express'

export default (router: Router): void => {
  router.get('/jobs', (req, res) => {
    res.json({ title: 'Any_title' })
  })
}
