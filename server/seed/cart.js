const db = require('../db')
const { Cart } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carts = {
    plants: []
  }
  await Cart.insertMany(carts)
  console.log('New cart', carts)
}
const run = async () => {
  await main()
  db.close()
}
run()
