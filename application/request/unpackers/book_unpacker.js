const Book = require('./../../../domain/entities/Book');

module.exports.add = (req) => {
    return new Book({
        name: req.body.name,
        author: req.body.author
    })
}

module.exports.edit = (req) => {
    return new Book({
        id: Number(req.params.id),
        name: req.body.name,
        author: req.body.author
    })
}