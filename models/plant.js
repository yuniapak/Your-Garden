const { Schema } = require('mongoose')

const plantSchema = new Schema(
  {
    Name: { type: String, required: true },
    fit: { type: Array, required: true },
    notFit: { type: Array, required: false },
    watering: { type: String, required: true },
    grow: { type: String, required: true },
    about: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = plantSchema
