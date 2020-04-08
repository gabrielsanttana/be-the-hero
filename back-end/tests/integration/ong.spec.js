const app = require('../../src/app');
const request = require('supertest');

describe('The OngController', () => {
  it('creates a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
        email: "contato@apad2.com",
        whatsapp: "19123456789",
        city: "São Paulo",
        uf: "SP",
      });
    
    console.log(response.body);
  });
});