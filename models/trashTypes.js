const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const TrashTypes = sequelize.define('trashTypes', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})

module.exports = TrashTypes
