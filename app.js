const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const sequelize = require('./util/database')
const TrashItem = require('./models/trashItem') //Z tegp co widzę to muszę zaimportować modele które chce żeby się pojawiły w bazie danych (dlaczego? nie wiem😁)
const TrashType = require('./models/trashTypes') //Z tegp co widzę to muszę zaimportować modele które chce żeby się pojawiły w bazie danych (dlaczego? nie wiem😁)

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const trashRoutes = require('./routes/trashRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(trashRoutes)

sequelize
	// .sync({ force: true })
	.sync()
	.then(result => {
		app.listen(3000)
	})
	.catch(err => {
		console.log(err)
	})
