const {body, param} = require('express-validator');

module.exports.add = [
    body('name').exists().withMessage('Should not be empty')
        .isAlpha().withMessage('Should only be letters')
        .isLength({min: 3, max: 15}).withMessage('Should between 3 to 15'),
    body('author').exists().withMessage('Should not be empty')
        .isAlpha().withMessage('Should only be letters')
        .isLength({min: 3, max: 20}).withMessage('Should between 3 to 20')
];

module.exports.edit = [
    param('id').exists().withMessage('Should not be empty')
        .isNumeric().withMessage('Should be numeric'),
    body('name').exists().withMessage('Should not be empty')
        .isAlpha().withMessage('Should only be letters')
        .isLength({min: 3, max: 15}).withMessage('Should between 3 to 15'),
    body('author').exists().withMessage('Should not be empty')
        .isAlpha().withMessage('Should only be letters')
        .isLength({min: 3, max: 20}).withMessage('Should between 3 to 20')
]

module.exports.id = [
    param('id').exists().withMessage('Should not be empty')
        .isNumeric().withMessage('Should be numeric'),
]