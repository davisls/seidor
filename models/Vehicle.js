const mongoose = require('mongoose')

module.exports = mongoose.model('Vehicle', {
    brand: { type: String, required: true },
    color: { type: String, required: true },
    plate: { type: String, required: true, unique: true },
    onUtilization: { type: Boolean, required: false, default: false }
})