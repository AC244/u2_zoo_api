const db = require('../db')
const {Type} = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const types = [
        {
            name: 'Reptile',
            description: 'Cold-blooded, scaly animals that lay eggs.',
            hasFur: false,
            hasScales: true,
            hasBones: true,
            hasClaws: true,
            hasTeeth: true,
            hasArms: true,
            hasLegs: true
        },
        {
            name: 'Bird',
            description: 'Warm-blooded animals with feathers and wings.',
            hasFur: false,
            hasScales: false,
            hasBones: true,
            hasClaws: true,
            hasTeeth: false,
            hasArms: true,
            hasLegs: true,
        },
        {
            name: 'Mammal',
            description: 'Warm-blooded animals with fur or hair that nurse their young.',
            hasFur: true,
            hasScales: false,
            hasBones: true,
            hasClaws: true,
            hasTeeth: true,
            hasArms: true,
            hasLegs: true,
        }
    ]

    await Type.insertMany(types)
    console.log("Created some types!")
}

const run = async () => {
    await main()
    db.close()
}

run()
