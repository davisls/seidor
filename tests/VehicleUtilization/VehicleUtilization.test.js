const request = require('supertest');
const { app } = require('../../index');
const agent = request.agent(app);

const {
  dbConnect,
  dbDisconnect,
} = require('../mockDB');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('VehicleUtilization tests suit', () => {
  let idUtilization = '';
  it('Should validate saving a new utilization successfully', async () => {
    const vehicle = await agent
      .post('/api/vehicle/')
      .send({
        brand: 'ford',
        color: 'red',
        plate: 'AAA0A00'
      })
      .expect(200)

    const driver = await agent
      .post('/api/driver/')
      .send({name: 'Teste' })
      .expect(200)

    const utilization = await agent
      .post('/api/vehicleUtilization/')
      .send({
        reason: 'Teste',
        vehicle: vehicle.body.data._id,
        driver: driver.body.data._id
      })
      .expect(200)

    idUtilization = utilization.body.data._id; 
    expect(idUtilization).toBeTruthy();
  });

  
  it('Should get all utilizations',  async () => {
    const vehicles = await agent
      .get('/api/vehicleUtilization/')
      .expect(200)

    expect(vehicles.body.data.length).toBe(1)
  });

  it('Should get a utilization by id', async () => {
    const utilization = await agent
      .get(`/api/vehicleUtilization/${idUtilization}`)
      .expect(200)

    expect(utilization.body.data._id).toBe(idUtilization)
  });

  it('Should finish a utilization by id', async () => {
    const vehicleUpdated = await agent
      .put(`/api/vehicleUtilization/${idUtilization}`)
      .expect(200)

    expect(vehicleUpdated.body.data.endDate).toBeTruthy();
  });
});