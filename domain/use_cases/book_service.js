const bookDetailsClient = require('./../../application/container').webclients.BOOK_DETAILS_CLIENT;
const Book = require('./../entities/Book');

const bookRepo = require('./../../externals/repositories/book_repo');

module.exports.getAuthor = (name) => {
    let book = new Book();

    book.setName(name);
    book.setAuthor(bookDetailsClient.getAuthor(name));

    return book;
}

module.exports.getAll = function () {

    return bookRepo.getAll();
};

module.exports.add = function (book) {

    return bookRepo.save(book)
        .then(saved => {
            return saved.getId();
        });
}

module.exports.edit = function (book) {

    return bookRepo.getById(book.id)
        .then(existing => {
            existing.setName(book.getName());
            existing.setAuthor(book.getAuthor());

            return bookRepo.update(existing);
        })
        .then();
}

module.exports.getById = function (id) {

    return bookRepo.getById(id);
}

module.exports.delete = function (id) {

    return bookRepo.delete(id);
}