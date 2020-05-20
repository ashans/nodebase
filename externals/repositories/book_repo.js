const BookDao = require('./dao/book_dao');
const Book = require('./../../domain/entities/Book');
const RepoError = require('./../errors/repository_error');

module.exports.save = (book) => {
    return BookDao.create(book)
        .then((saved) => {
            console.log(saved);

            return new Book(saved);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports.getAll = () => {
    return BookDao.findAll()
        .then((daos) => {
            return daos.map(dao => {
                return new Book(dao);
            });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports.getById = (id) => {
    return BookDao.findOne({where: {id}})
        .then(data => {
            if (!data)
                return Promise.reject(RepoError("No book found", "NO_BOOK"));
            return new Book(data);
        });
}

module.exports.update = (book) => {
    return BookDao.update(book, {where: {id: book.id}})
        .then((saved) => {
            console.log(saved);

            return new Book(saved);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports.delete = (id) => {
    return BookDao.destroy({where: {id}})
        .then(result => {
            if (!result || result === 0)
                return Promise.reject(RepoError("No book found", "NO_BOOK"));
        });
}