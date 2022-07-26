const { Schema } = require('mongoose')

const cartSchema = new Schema({
  plants: [{ type: Schema.Types.ObjectId, ref: 'Plant' }]
})

module.exports = cartSchema
