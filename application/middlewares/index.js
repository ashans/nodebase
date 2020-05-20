const notFound = require('./404');
const errorHandler = require('./error_handler');

module.exports = app => {
    app.use(notFound);
    app.use(errorHandler);
}