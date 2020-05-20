const ErrorTypes = require('./types');

module.exports = () => {

    let err = new Error("Not Found");
    err.name = ErrorTypes.NOT_FOUND_ERROR;
    err.code = "NOT_FOUND";

    return err;
};