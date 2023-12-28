const Driver = require('../models/Driver')
const BaseService = require('../services/BaseService')
const DriverService = require('../services/DriverService')
const { validationResult } = require('express-validator')

exports.driverGetAll = async (req, res, next) => {
    try {
        const drivers = await BaseService.getAll(Driver)
        return res.status(200).json({ 
            status: 200,
            data: drivers,
            message: "Succesfully Drivers Retrieved" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.driverGetByName = async (req, res, next) => {
    try {
        const drivers = await DriverService.findByName(req.query)
        return res.status(200).json({ 
            status: 200,
            data: drivers,
            message: "Succesfully Drivers Retrieved" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.driverGetById = async (req, res, next) => {
    try {
        const driver = await BaseService.getById(Driver, req.params.id)
        if (!driver) {
            return res.status(400).json({
                status: 400,
                message: 'No record with given id'
            });
        }

        return res.status(200).json({ 
            status: 200,
            data: driver,
            message: "Succesfully Driver Retrieved" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.driverCreate = async (req, res, next) => {
    try {
        if (!validationResult(req).isEmpty()) {
            return res.status(400).json({
                status: 400,
                message: validationResult(req).array()
            });
        }
        
        const driver = await BaseService.create(Driver, req.body)

        return res.status(200).json({ 
            status: 200,
            data: driver,
            message: "Succesfully Driver Created" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.driverUpdate = async (req, res, next) => {
    try {
        const driver = await BaseService.update(Driver, req.params.id, req.body)
        if (!driver) {
            return res.status(400).json({
                status: 400,
                message: 'No record with given id'
            });
        }
        
        return res.status(200).json({ 
            status: 200,
            data: driver,
            message: "Succesfully Driver Updated" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};

exports.driverDelete = async (req, res, next) => {
    try {
        const driver = await BaseService.delete(Driver, req.params.id)
        if (!driver) {
            return res.status(400).json({
                status: 400,
                message: 'No record with given id'
            });
        }

        return res.status(200).json({ 
            status: 200,
            data: driver,
            message: "Succesfully Driver Deleted" })
        ;
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message 
        });
    }
};
