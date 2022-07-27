const { models } = require('mongoose')
const { Plant, Cart } = require('../models')

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find()
    console.log(plants)
    return res.status(200).json(plants)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getPlantByName = async (req, res) => {
  try {
    let plantName = req.query.search
    const plant = await Plant.find({ Name: plantName })
    res.send(plant)
  } catch (error) {
    throw error
  }
}
const findOne = async (req, res) => {
  try {
    const plant = await Plant.findOne({ Name })
    res.send(plant)
  } catch (error) {
    throw error
  }
}
const createCart = async (req, res) => {
  try {
    const newCart = await Cart.create(req.body)
    res.send(newCart)
  } catch (error) {
    throw error
  }
}

const updatePlantCart = async (req, res) => {
  try {
    const newPlant = await Cart.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { plants: { $each: req.body.plants } } }
    )
    res.json({ newPlant })
  } catch (error) {
    throw error
  }
}
const deletePlantFromCart = async (req, res) => {
  try {
    const objId = req.params.id
    const deletePlant = await Cart.destroy({ where: { id: objectId } })
    res.send({ msg: `object with ID ${objId} delete` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPlants,
  getPlantByName,
  createCart,
  updatePlantCart,
  deletePlantFromCart,
  findOne
}
