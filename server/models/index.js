const mongoose = require('mongoose')

const plantSchema = require('./plant')
const cartSchema = require('./cart')
const fitSchema = require('./fit')

const Plant = mongoose.model('Plant', plantSchema)
const Cart = mongoose.model('Cart', cartSchema)
const Fit = mongoose.model('Fit', fitSchema)

module.exports = {
  Plant,
  Cart,
  Fit
}
