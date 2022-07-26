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
const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id)
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
// const updateCart = async (req, res) => {
//   try {
//     const { id } = req.params
//     await Cart.findByIdAndUpdate(id, req.body, { new: true }, (err, cart) => {
//       if (err) {
//         res.status(500).send(err)
//       }
//       if (!cart) {
//         res.status(500).send('Cart not found!')
//       }
//       return res.status(200).json(cart)
//     })
//   } catch (error) {
//     throw error
//   }
// }
updatePlantCart = async (req, res) => {
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

module.exports = {
  getAllPlants,
  getPlantById,
  createCart,
  updatePlantCart
}
