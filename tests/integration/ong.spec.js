// O Teste de Integração vai testar a aplicação como um todo, vai fazer uma chamada API pra nossa aplicação e verifica se o retorno esta valido.

const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "ABC",
      email: "email@email.com.br",
      whatzapp: "12345678910",
      city: "Rio",
      uf: "RJ"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});