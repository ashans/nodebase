const {validationResult} = require('express-validator');
const validationError = require('./../errors/validation_error')

module.exports = (req) => {
    const errors = validationResult(req).array();

    if(errors && errors.length){
        throw (validationError(errors));
    }
}