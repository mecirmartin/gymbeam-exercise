import request from 'supertest'

import app, { server } from '../src/index'

describe('/shortest-path endpoint', () => {
  it('Should return 400 if invalid request body is specified', async () => {
    const res = await request(app)
      .get('/shortest-path')
      .send({
        startingPosition: {
          x: 0,
          y: 0,
          z: 0,
        },
      })
    expect(res.statusCode).toEqual(400)
  })
  it('Should return 400 if invalid request body is specified', async () => {
    const res = await request(app)
      .get('/shortest-path')
      .send({
        products: ['product-1', 'product-2'],
      })
    expect(res.statusCode).toEqual(400)
  })
  it('Should return 200 if valid request body is specified', async () => {
    const res = await request(app)
      .get('/shortest-path')
      .send({
        products: ['product-1', 'product-2'],
        startingPosition: {
          x: 0,
          y: 0,
          z: 0,
        },
      })

    expect(res.statusCode).toEqual(200)
  })
})

describe('non-existent route', () => {
  it('Should return 404 when invalid route is specified', async () => {
    const res = await request(app).get('/xxx')
    expect(res.statusCode).toEqual(404)
  })
})

afterAll(() => {
  server.close()
})
