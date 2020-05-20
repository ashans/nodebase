const types = require('./../errors/types');

const app = require('express')();

function getHttpCode(err) {
    if (!err.name) {
        err.name = types.SERVER_ERROR;
    }
    switch (err.name) {

        case types.VALIDATION_ERROR:
            return 422;
        case types.NOT_FOUND_ERROR:
            return 404;
        case types.UNKNOWN_ERROR:
            return 409;
        case types.MIDDLEWARE_ERROR:
        case types.DOMAIN_ERROR:
        case types.REPOSITORY_ERROR:
        case types.WEBCLIENT_ERROR:
            return 400;
        default:
            return 500;
    }
}

module.exports = function (err, req, res, next) {

    // build error response
    res.status(getHttpCode(err))
        .json({
            code: err.code,
            type: err.name,
            message: err.message,
            errors : (err.name === types.VALIDATION_ERROR) ? err.errors : undefined,
            stack: (err.name !== types.VALIDATION_ERROR &&  app.get('env') === 'development') ? err.stack.split("\n") : undefined
        });
}