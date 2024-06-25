const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const TrashItem = sequelize.define('trashItem', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	trashName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	trashType: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	trashDescription: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	trashImageURL: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})

module.exports = TrashItem
