const app = require('./app');
const request = require('supertest');

describe('test the sort path', () => {
 it('should response the post method', (done) => {
    request(app).post('/sort')
      .send({ "numbers": [2, 3, 1] })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body.sorted).toEqual([1, 2, 3]);
        done();
      });
  });
});

