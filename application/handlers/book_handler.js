const router = require('express').Router();
const responseBuilder = require('./../response/builder');
const validate = require('../request/validate');
const unpacker = require('./../request/unpackers/book_unpacker');


const bookValidator = require('../request/validators/book_validator');
const service = require('./../../domain/use_cases/book_service');

/* GET home page. */
router.get('/', function (req, res) {
    service.getAll()
        .then(books => {
            responseBuilder.ok(res, books);
        });
});

router.post('/', bookValidator.add, function (req, res) {
    validate(req);

    service.add(unpacker.add(req))
        .then(id => {
            responseBuilder.created(res, id);
        });
});

router.get('/:id', bookValidator.id, function (req, res, next) {
    validate(req);

    let id = Number(req.params.id)

    service.getById(id)
        .then(book => {
            responseBuilder.ok(res, book);
        })
        .catch(next);
});

router.put('/:id', bookValidator.edit, function (req, res, next) {
    validate(req);

    service.edit(unpacker.edit(req))
        .then(empty => {
            responseBuilder.noContent(res);
        })
        .catch(next);
});

router.delete('/:id', bookValidator.id, function (req, res, next) {

    validate(req);

    let id = Number(req.params.id);

    service.delete(id)
        .then(result => {
            responseBuilder.noContent(res);
        })
        .catch(next);
})

module.exports = router;