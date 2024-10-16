const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const animalController = require('./controllers/animalController')
const typeController = require('./controllers/typeController')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('Welcome to my page'))

app.get('/animals', animalController.getAllAnimals)

app.get('/animals/:id', animalController.getAnimalById)

app.post('/animals', animalController.createAnimal)

app.put('/animals/:id', animalController.updateAnimal)

app.delete('/animals/:id', animalController.deleteAnimal)

app.get('/types', typeController.getAllTypes)

app.get('/types/:id', typeController.getTypeById)

app.post('/types', typeController.createType)

app.put('/types/:id', typeController.updateType)

app.delete('/types/:id', typeController.deleteType)
