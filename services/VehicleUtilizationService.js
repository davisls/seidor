const moment = require('moment')
const VehicleUtilization = require('../models/VehicleUtilization')
const BaseService = require('../services/BaseService')
const Vehicle = require('../models/Vehicle')
const Driver = require('../models/Driver')
const mongoose = require('mongoose')

const addInitialDate = data => {
  return { initialDate: moment().format('yyyy-MM-DD:hh:mm:ss'), ...data }
}

const addEndDate = data => {
  data.endDate = moment().format('yyyy-MM-DD:hh:mm:ss')
}

exports.getAll = async () => {
  try {
    return VehicleUtilization.find().populate('vehicle').populate('driver')
  } catch (e) {
    throw Error(e.message)
  }
}
exports.getById = async (id) => {
  try {
    return VehicleUtilization.findById(id).populate('vehicle').populate('driver')
  } catch (e) {
    throw Error(e.message)
  }
}

exports.create = async (vehicleUtilization) => {
  const session = await mongoose.connection.startSession();

  try {
    session.startTransaction();

    const driver = await BaseService.getById(Driver, vehicleUtilization.driver);
    const vehicle = await BaseService.getById(Vehicle, vehicleUtilization.vehicle);

    if (!driver || !vehicle)
      throw Error(`Driver or vehicle not found`)

    if (driver.onUtilization)
      throw Error(`This driver is already in a utilization`)

    if (vehicle.onUtilization)
      throw Error(`This vehicle is already in a utilization`)

    const utilization = VehicleUtilization.create(addInitialDate(vehicleUtilization))

    driver.onUtilization = true;
    vehicle.onUtilization = true;

    await BaseService.update(Driver, driver._id, driver)
    await BaseService.update(Vehicle, vehicle._id, vehicle)

    await session.commitTransaction();

    return utilization
  } catch (e) {
    await session.abortTransaction();
    throw Error(e.message)
  } finally {
    session.endSession();
  }
}

exports.finishUtilization = async (id) => {
  const session = await mongoose.connection.startSession();

  try {
    session.startTransaction();

    const utilization = await VehicleUtilization.findById(id);
    if (utilization.endDate)
      throw Error(`This Utilization is already finished`)

    addEndDate(utilization);
    const finishUtilization = VehicleUtilization.findByIdAndUpdate(id, utilization, { new: true })

    const driver = await BaseService.getById(Driver, utilization.driver);
    const vehicle = await BaseService.getById(Vehicle, utilization.vehicle);

    driver.onUtilization = false;
    vehicle.onUtilization = false;

    await BaseService.update(Driver, driver._id, driver)
    await BaseService.update(Vehicle, vehicle._id, vehicle)

    await session.commitTransaction();

    return finishUtilization
  } catch (e) {
    throw Error(e.message)
  } finally {
    session.endSession();
  }
}
