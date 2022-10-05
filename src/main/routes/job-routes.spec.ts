import request from 'supertest'
import app from '../config/app'

describe('GET /jobs', () => {
  test('Should return 200 on success', async () => {
    await request(app)
      .get('/api/jobs')
      .expect(200)
  })
})
