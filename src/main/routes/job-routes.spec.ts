import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    await request(app)
      .get('/api/jobs')
      .expect(200)
  })
})
