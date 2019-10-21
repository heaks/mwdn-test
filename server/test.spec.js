const supertest = require('supertest');

const app = require('../server');

const request = supertest(app);

describe('Should check connection to API', () => {
  it('Should return status 200', async done => {
    const res = await request.get('/test');
    expect(res.text).toEqual('Sms server works');
    expect(res.status).toBe(200);
    done();
  });
  it('Should return status 404', async done => {
    const res = await request.get('/unknown');
    expect(res.status).toBe(404);
    done();
  });
  it('Should return error on invalid number', async done => {
    const res = await request.post('/send', { sendTo: '123' });
    expect(res.status).toBe(500);
    done();
  })
});