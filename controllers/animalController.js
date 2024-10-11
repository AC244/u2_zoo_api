const {Animal} = require('../models')

// Get index
const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find().populate('type')
        res.json(animals)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Get show
const getAnimalById = async (req, res) => {
    try {
        const { id } = req.params
        const animal = await Animal.findById(id).populate('type')
        if (animal) {
            return res.json(animal)
        }
        return res.status(404).send('Animal with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Create -> post
const createAnimal = async (req, res) => {
    try {
        const animal = await new Animal(req.body)
        await animal.save()
        return res.status(201).json({
            animal,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// Update -> put
const updateAnimal = async (req, res) => {
    try {
        const { id } = req.params
        const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true })
        if (animal) {
            return res.status(200).json(animal)
        }
        throw new Error("Animal not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Delete -> delete
const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Animal.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Animal deleted")
        }
        throw new Error("Animal not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllAnimals,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal
}
