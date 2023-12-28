const mongoose = require('mongoose')

module.exports = mongoose.model('Driver', {
    name: { type: String, required: true, unique: true },
    onUtilization: { type: Boolean, required: false, default: false }
})