const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.json({
        name: 'Base NodeJS project',
        description: 'Base NodeJS project for REST API using clean architecture principals',
        version: '1.0.0'
    });
});

module.exports = router;