const { body } = require('express-validator')

exports.createValidator = [
  body('brand', 'Brand does not Empty').not().isEmpty(),
  body('color', 'Color does not Empty').not().isEmpty(),
  body('plate', 'Plate does not Empty').not().isEmpty(),
  body('plate', 'Plate needs to be a valid brazilian plate').matches(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/).isLength({min: 7, max: 7})
]
