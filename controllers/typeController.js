const {Type} = require('../models')

// Get index
const getAllTypes = async (req, res) => {
    try {
        const types = await Type.find()
        res.json(types)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Get show
const getTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const type = await Type.findById(id)
        if (type) {
            return res.json(type)
        }
        return res.status(404).send('Type with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Create -> post
const createType = async (req, res) => {
    try {
        const type = await new Type(req.body)
        await type.save()
        return res.status(201).json({
            type,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// Update -> put
const updateType = async (req, res) => {
    try {
        const { id } = req.params
        const type = await Type.findByIdAndUpdate(id, req.body, { new: true })
        if (type) {
            return res.status(200).json(type)
        }
        throw new Error("Type not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Delete -> delete
const deleteType = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Type.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Type deleted")
        }
        throw new Error("Type not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
}
