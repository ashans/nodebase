function Book({id, name, author} = {}) {

    this.id = id;
    this.name = name;
    this.author = author;
}

Book.prototype.setId = function (id) {
    this.id = id;
}

Book.prototype.getId = function () {
    return this.id;
}

Book.prototype.setName = function (name) {
    this.name = name;
}

Book.prototype.getName = function () {
    return this.name;
}

Book.prototype.setAuthor = function (author) {
    this.author = author;
}

Book.prototype.getAuthor = function () {
    return this.author;
}

module.exports = Book;