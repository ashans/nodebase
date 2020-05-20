const WebclientError = require('./../errors/webclient_error')

module.exports.getAuthor = (name) => {
    if (name === 'invalid') throw (WebclientError("Invalid Book name", "INV_BOOK_NAME"));
    return 'M. Wikramasinghe';
}