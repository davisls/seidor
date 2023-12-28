const Vehicle = require('../models/Vehicle')

exports.findByColorOrBrand= async (params) => {
  try {
    return Vehicle.find(
      { 
        color: { $regex: '.*' + params.color + '.*', $options: 'i' },
        brand: { $regex: '.*' + params.brand + '.*', $options: 'i' } 
      })
  } catch (e) {
    throw Error(e.message)
  } 
}
