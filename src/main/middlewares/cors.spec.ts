import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test-cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test-cors')
      .expect('acces-control-allow-origin', '*')
      .expect('acces-control-allow-methods', '*')
      .expect('acces-control-allow-headers', '*')
  })
})
