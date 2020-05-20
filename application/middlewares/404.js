const notFound = require('./../errors/not_found_error');

module.exports = function(req, res, next) {
    next(notFound());
}