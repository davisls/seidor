const ObjectId = require('mongoose').Types.ObjectId

const validateId = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        res.status(400).json({
            code: 400,
            message: `Given id (${req.params.id}) is not valid.`
        })
    else
        next() 
}

const errorHandler = (error, req, res, next) => {
    console.log(error);
    res.status(500).json({
        message: 'Something wrong happened',
        code: 500 
    })
}

module.exports = {
    validateId,
    errorHandler
}