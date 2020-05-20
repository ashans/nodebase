const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodebase', 'postgres', 'postgres', {
    // gimme postgres, please!
    dialect: 'postgres',
    host: 'localhost'
})

module.exports = sequelize;