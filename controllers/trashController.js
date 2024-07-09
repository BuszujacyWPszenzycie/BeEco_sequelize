const TrashItem = require('../models/trashItem')
const TrashTypes = require('../models/trashTypes')
const sequelize = require('../util/database')
const { Op } = require('sequelize')

exports.showMainPage = (req, res, next) => {
	res.render('index', {
		path: '/',
		pageTitle: 'Strona główna',
	})
}

exports.getAddTrash = (req, res, next) => {
	res.render('add-trash', {
		path: '/add-trash',
		pageTitle: 'Dodaj odpad',
	})
}

exports.postAddTrash = (req, res, next) => {
	const trashName = req.body.trashName
	const trashType = req.body.trashType
	const trashDescription = req.body.trashDescription
	const trashImageURL = req.body.trashImageURL
	console.log(trashName)
	console.log(trashType)
	console.log(trashDescription)
	console.log(trashImageURL)
	TrashItem.create({
		trashName: trashName,
		trashType: trashType,
		trashDescription: trashDescription,
		trashImageURL: trashImageURL,
	})
		.then(result => {
			console.log('Product created')
			return res.redirect('/')
		})
		.catch(err => {
			console.log(err)
		})
}

exports.getAllTrash = (req, res, next) => {
	TrashItem.findAll()
		.then(allTrashItems => {
			res.render('all-trash', {
				allTrashItems: allTrashItems,
				pageTitle: 'Wszystkie produkty',
				path: '/all-trash',
			})
		})
		.catch(err => {
			console.log(err)
		})
}

exports.getSearchPage = (req, res, next) => {
	res.render('search', {
		path: '/search',
		pageTitle: 'Wyszukaj',
	})
}

exports.getSearchTrash = (req, res, next) => {
	// const searchValue = 'Mięso'
	const searchValue = req.body.trashName
	TrashItem.findAll({
		where: {
			[Op.or]: [
				{ trashName: { [Op.like]: `%${searchValue}%` } },
				{ trashType: { [Op.like]: `%${searchValue}%` } },
				{ trashDescription: { [Op.like]: `%${searchValue}%` } },
			],
		},
	})
		.then(foundValues => {
			res.render('found-values', {
				pageTitle: 'Znaleziono',
				path: '/found-values',
				foundValues: foundValues,
			})
		})
		.catch(err => console.log(err))
}

// Working function - finding only in trashName

// exports.getSearchTrash = (req, res, next) => {
// 	const searchValue = req.body.trashName
// 	TrashItem.findAll({
// 		where: {
// 			trashName: searchValue,
// 		},
// 	})
// 		.then(foundValues => {
// 			res.render('found-values', {
// 				pageTitle: 'Znaleziono',
// 				path: '/found-values',
// 				foundValues: foundValues,
// 			})
// 		})
// 		.catch(err => console.log(err))
// }

// Function from ChatGPT

// exports.getSearchTrash = async (req, res, next) => {
// 	const searchValue = 'bio'
// 	if (!searchValue) {
// 		return res.status(400).json({ error: 'No search value provided' })
// 	}
// 	try {
// 		const foundValues = await TrashItem.findAll({
// 			where: {
// 				[sequelize.Sequelize.Op.or]: [
// 					{ trashName: { [sequelize.Sequelize.Op.like]: `%${searchValue}%` } },
// 					{ trashType: { [sequelize.Sequelize.Op.like]: `%${searchValue}%` } },
// 					{ trashDescription: { [sequelize.Sequelize.Op.like]: `%${searchValue}%` } },
// 				],
// 			},
// 		})
// 		res.render('found-values', {
// 			path: '/found-values',
// 			pageTitle: 'Znaleziono',
// 			foundValues: foundValues,
// 		})
// 	} catch (error) {
// 		res.status(500).json({ error: error.message })
// 	}
// }
