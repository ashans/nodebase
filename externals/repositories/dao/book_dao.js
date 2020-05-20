const Sequelize = require('sequelize');
const container = require('./../../../application/container');

module.exports = container.adaptors.dbAdaptor.define('books', {
    id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // options
});