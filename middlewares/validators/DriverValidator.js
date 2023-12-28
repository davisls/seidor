const { body } = require('express-validator')

exports.createValidator = [
  body('name', 'Name does not Empty').not().isEmpty(),
]
