const VehicleUtilization = require('../models/VehicleUtilization')
const VehicleUtilizationService = require('../services/VehicleUtilizationService')
const BaseService = require('../services/BaseService')
const { validationResult } = require('express-validator')

exports.utilizationGetAll = async (req, res, next) => {
  try {
    const utilizations = await VehicleUtilizationService.getAll()
    return res.status(200).json({ 
      status: 200,
      data: utilizations,
      message: "Succesfully Utilizations Retrieved" })
    ;
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message 
    });
  }
};

exports.utilizationGetById = async (req, res, next) => {
  try {
    const utilization = await VehicleUtilizationService.getById(req.params.id)
    if (!utilization) {
      return res.status(400).json({
        status: 400,
        message: 'No record with given id'
      });
    }

    return res.status(200).json({ 
        status: 200,
        data: utilization,
        message: "Succesfully Uilization Retrieved" })
    ;
} catch (e) {
    return res.status(400).json({
        status: 400,
        message: e.message 
    });
}
};

exports.utilizationCreate = async (req, res, next) => {
  if (!validationResult(req).isEmpty()) {
    return res.status(400).json({
        status: 400,
        message: validationResult(req).array()
    });
  }

  try {
    const utilization = await VehicleUtilizationService.create(req.body)

    return res.status(200).json({ 
        status: 200,
        data: utilization,
        message: "Succesfully Utilization Created" })
    ;
  } catch (e) {
      return res.status(400).json({
          status: 400,
          message: e.message 
      });
  }
};

exports.utilizationEnd = async (req, res, next) => {
  try {
    const utilization = await VehicleUtilizationService.finishUtilization(req.params.id)
    if (!utilization) {
      return res.status(400).json({
        status: 400,
        message: 'No record with given id'
      });
    }

    return res.status(200).json({ 
        status: 200,
        data: utilization,
        message: "Succesfully Utilization Finished" })
    ;
  } catch (e) {
      return res.status(400).json({
          status: 400,
          message: e.message 
      });
  }
};
