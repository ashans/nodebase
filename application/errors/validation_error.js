const ErrorTypes = require('./types');

module.exports = (errors) => {

    let err = new Error("Validation Errors");
    err.name = ErrorTypes.VALIDATION_ERROR;
    err.errors = errors;

    return err;
};