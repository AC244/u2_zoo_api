const db = require('../db')
const {Animal, Type} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const types = await Type.find()

    const animals = [
        {
            name: 'Green Iguana',
            scientificName: 'Iguana iguana',
            region: 'Central America',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Iguana_iguana_05.jpg',
            type: types[0]._id
        },
        {
            name: 'Bald Eagle',
            scientificName: 'Haliaeetus leucocephalus',
            region: 'North America',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bald_Eagle_%28Haliaeetus_leucocephalus%29.jpg',
            type: types[1]._id
        },
        {
            name: 'Lion',
            scientificName: 'Panthera leo',
            region: 'Africa',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Leo_lion_1.jpg',
            type: types[2]._id
        },
        {
            name: 'Chameleon',
            scientificName: 'Chamaeleo',
            region: 'Madagascar',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chameleon_on_branch.jpg',
            type: types[0]._id
        },
        {
            name: 'Penguin',
            scientificName: 'Spheniscidae',
            region: 'Antarctica',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Aptenodytes_forsteri.jpg',
            type: types[1]._id
        },
        {
            name: 'Elephant',
            scientificName: 'Loxodonta',
            region: 'Africa',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/African_elephant.jpg',
            type: types[2]._id
        }
    ]

    await Animal.insertMany(animals)
    console.log("Created some animals!")
}

const run = async () => {
    await main()
    db.close()
}

run()
