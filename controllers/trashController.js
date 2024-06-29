const TrashItem = require('../models/trashItem')
const TrashTypes = require('../models/trashTypes')

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
	console.log('getAllTrash - działa?')
	TrashItem.findAll()
		.then(allTrashItems => {
			res.render('search', {
				allTrashItems: allTrashItems,
				pageTitle: 'Wyszukiwarka',
				path: '/search',
			})
		})
		.catch(err => {
			console.log(err)
		})
}
