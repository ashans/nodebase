const DomainErrorTypes = require('./../../domain/errors/types');
const ExternalErrorTypes = require('./../../externals/errors/types');

const ErrorTypes = {
    SERVER_ERROR: "ServerException",
    VALIDATION_ERROR: "ValidationException",
    MIDDLEWARE_ERROR: "MiddlewareException",
    NOT_FOUND_ERROR: "NotFoundException",
    UNKNOWN_ERROR: "UnknownException"
};

module.exports = {...ErrorTypes, ...DomainErrorTypes, ...ExternalErrorTypes};