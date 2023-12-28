const request = require('supertest');
const { app } = require('../../index');
const agent = request.agent(app);

const {
  dbConnect,
  dbDisconnect,
} = require('../mockDB');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Driver tests suit', () => {
  it('Should validate saving a new driver successfully', done => {
    agent
      .post('/api/driver/')
      .send({name: 'Teste' })
      .expect(200)
      .then(res => {
        expect(res.body.data._id).toBeTruthy();
        done();
      });
  });

  it('Should throw a error', async () => {
    await agent
      .post('/api/driver/')
      .send({})
      .expect(400);
  });
  
  it('Should get all drivers',  async () => {
    const drivers = await agent
      .get('/api/driver/')
      .expect(200)

    expect(drivers.body.data.length).toBe(1)
  });

  it('Should get a driver by id', async () => {
    const driver = await agent
      .post('/api/driver/')
      .send({name: 'Teste2' })
      .expect(200)

    const driver2 = await agent
      .get(`/api/driver/${driver.body.data._id}`)
      .expect(200)

    expect(driver2.body.data._id).toBe(driver.body.data._id)
  });

  it('Should get a driver by name', async () => {
    const drivers = await agent
      .get('/api/driver/filter/?name=teste')
      .expect(200)

      expect(drivers.body.data.length).toBe(2)
  });

  it('Should update a driver by id', async () => {
    const driverToUpdate = await agent
      .get('/api/driver/filter/?name=Teste2')
      .expect(200)


    const driverUpdated = await agent
      .put(`/api/driver/${driverToUpdate.body.data[0]._id}`)
      .send({name: 'Teste2Updated' })
      .expect(200)

    expect(driverUpdated.body.data.name).toBe('Teste2Updated')
  });

  it('Should delete a driver by id', async () => {
    const driverToDelete = await agent
      .get('/api/driver/filter/?name=Teste2')
      .expect(200)

     await agent
      .delete(`/api/driver/${driverToDelete.body.data[0]._id}`)
      .expect(200)

    const drivers = await agent
      .get('/api/driver/')
      .expect(200)

    expect(drivers.body.data.length).toBe(1)
  });
});
    