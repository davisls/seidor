const mongoose = require('mongoose')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = mongoose.model('VehicleUtilization', {
    reason: { type: String, required: true },
    initialDate: { type: Date, required: true },
    driver: { type: ObjectId, required: true, ref: 'Driver' },
    vehicle: { type: ObjectId, required: true, ref: 'Vehicle' },
    endDate: { type: Date, required: false, default: null },
})