const Driver = require('../models/Driver')

exports.findByName= async (params) => {
  try {
    return Driver.find(
      { 
        name: { $regex: params.name, $options: 'i' },
      })
  } catch (e) {
    throw Error(e.message)
  } 
}
