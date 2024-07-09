const { Sequelize, DataTypes, Op } = require('sequelize')

const sequelize = new Sequelize('beeco_testing', 'root', '6L#^$cv9DH3B$N', { dialect: 'mysql', host: 'localhost' })

module.exports = sequelize
