const request = require('supertest');
const { app } = require('../../index');
const agent = request.agent(app);

const {
  dbConnect,
  dbDisconnect,
} = require('../mockDB');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Vehicle tests suit', () => {
  it('Should validate saving a new vehicle successfully', done => {
    agent
      .post('/api/vehicle/')
      .send({
        brand: 'ford',
        color: 'red',
        plate: 'AAA0A00'
      })
      .expect(200)
      .then(res => {
        expect(res.body.data._id).toBeTruthy();
        done();
      });
  });

  it('Should validate a double plate vehicle successfully', done => {
    agent
      .post('/api/vehicle/')
      .send({
        brand: 'chev',
        color: 'blue',
        plate: 'AAA0A00'
      })
      .expect(400)
      done();
  });
  
  it('Should get all vehicles',  async () => {
    const vehicles = await agent
      .get('/api/vehicle/')
      .expect(200)

    expect(vehicles.body.data.length).toBe(1)
  });

  it('Should get a vehicle by id', async () => {
    const vehicle = await agent
      .post('/api/vehicle/')
      .send({
        brand: 'ford',
        color: 'blue',
        plate: 'AAA1A00'
      })
      .expect(200)

    const vehicle2 = await agent
      .get(`/api/vehicle/${vehicle.body.data._id}`)
      .expect(200)

    expect(vehicle2.body.data._id).toBe(vehicle.body.data._id)
  });

  it('Should get a vehicle by color and brand', async () => {
    const vehicles = await agent
      .get('/api/vehicle/filter/?color=&brand=ford')
      .expect(200)

      expect(vehicles.body.data.length).toBe(2)
  });

  it('Should update a vehicle by id', async () => {
    const vehicleToUpdate = await agent
      .get('/api/vehicle/filter/?color=red&brand=')
      .expect(200)


    const vehicleUpdated = await agent
      .put(`/api/vehicle/${vehicleToUpdate.body.data[0]._id}`)
      .send({
        brand: 'ford',
        color: 'redUpdated',
        plate: 'AAA0A00'
      })
      .expect(200)

    expect(vehicleUpdated.body.data.color).toBe('redUpdated')
  });

  it('Should delete a vehicle by id', async () => {
    const vehicleToDelete = await agent
      .get('/api/vehicle/filter/?color=redUpdated&brand=')
      .expect(200)

     await agent
      .delete(`/api/vehicle/${vehicleToDelete.body.data[0]._id}`)
      .expect(200)

    const vehicles = await agent
      .get('/api/vehicle/')
      .expect(200)

    expect(vehicles.body.data.length).toBe(1)
  });
});