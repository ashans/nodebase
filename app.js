const express = require('express');
const logger = require('morgan');

const app = express();

app.set('container', {
    service: 'service name'
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
require('./application/router')(app);

// middlewares
require('./application/middlewares')(app);

require('./externals/adaptors/pg_adaptor');

module.exports = app;
