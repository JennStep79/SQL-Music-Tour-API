const band = require('express').Router()
const db = require('../models')
const { Band } = db

band.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (err) {
        res.status(500).send('Server error')
        console.log(err)
    }
})

band.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

band.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Band created successfully',
            data: newBand
        })
    } catch (err) {
        res.status(500).send('Server error')
        console.log(err)
    }
})

band.put('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(req.body, {
            where: { band_id: req.params.id }
        })
        res.status(200).json({
            message: `Band ${req.params.id} updated successfully`,
        })
    } catch (err) {
        res.status(500).send('Server error')
        console.log(err)
    }
})

band.delete('/:id', async (req, res) => {
    try {
        const deletedBand = await Band.destroy({
            where: { band_id: req.params.id }
        })
        res.status(200).json({
            message: `Band ${req.params.id} deleted successfully`
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = band