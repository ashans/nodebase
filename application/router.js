const appDetailsHandler = require('./handlers/app_details_handler');
const booksHandler = require('./handlers/book_handler');

module.exports = (app) => {
    app.use('/', appDetailsHandler);
    app.use('/books', booksHandler);
};