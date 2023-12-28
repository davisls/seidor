const Vehicle = require('../models/Vehicle')
const BaseService = require('../services/BaseService')
const VehicleService = require('../services/VehicleService')
const { validationResult } = require('express-validator')

exports.vehicleGetAll = async (req, res, next) => {
    try {
        const vehicles = await BaseService.getAll(Vehicle)
        return res.status(200).json({ 
            status: 200,
            data: vehicles,
            message: "Succesfully Vehicles Retrieved" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.vehicleGetByColorOrBrand = async (req, res, next) => {
    try {
        const vehicles = await VehicleService.findByColorOrBrand(req.query)
        return res.status(200).json({ 
            status: 200,
            data: vehicles,
            message: "Succesfully Vehicles Retrieved" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};


exports.vehicleGetById = async (req, res, next) => {
    try {
        const vehicle = await BaseService.getById(Vehicle, req.params.id)
        if (!vehicle) {
            return res.status(400).json({
                status: 400,
                message: 'No record with given id'
              });
        }

        return res.status(200).json({ 
            status: 200,
            data: vehicle,
            message: "Succesfully Vehicle Retrieved" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.vehicleCreate = async (req, res, next) => {
    try {
        if (!validationResult(req).isEmpty()) {
            return res.status(400).json({
                status: 400,
                message: validationResult(req).array()
            });
        }

        const vehicle = await BaseService.create(Vehicle, req.body)

        return res.status(200).json({ 
            status: 200,
            data: vehicle,
            message: "Succesfully Vehicle Created" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.vehicleUpdate = async (req, res, next) => {
    try {
        const vehicle = await BaseService.update(Vehicle, req.params.id, req.body)
        if (!vehicle) {
            return res.status(400).json({
                status: 400,
                message: 'No record with given id'
              });
        }

        return res.status(200).json({ 
            status: 200,
            data: vehicle,
            message: "Succesfully Vehicle Updated" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.vehicleDelete = async (req, res, next) => {
    try {
        const vehicle = await BaseService.delete(Vehicle, req.params.id)
        if (!vehicle) {
            return res.status(400).json({
                status: 400,
                message: 'No record with given id'
            });
        }

        return res.status(200).json({ 
            status: 200,
            data: vehicle,
            message: "Succesfully Vehicle Deleted" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};
