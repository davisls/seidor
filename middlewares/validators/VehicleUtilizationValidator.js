const ObjectId = require('mongoose').Types.ObjectId
const { body } = require('express-validator')

exports.createValidator = [
  body('driver', 'Driver does not Empty').not().isEmpty(),
  body('vehicle', 'Vehicle does not Empty').not().isEmpty(),
  body('driver', 'Driver not valid').custom((value, { req }) => {
    return ObjectId.isValid(req.body.driver);
  }),
  body('vehicle', 'Vehicle not valid').custom((value, { req }) => {
    return ObjectId.isValid(req.body.vehicle);
  }),
  body('reason', 'Reason does not Empty').not().isEmpty(),
]
