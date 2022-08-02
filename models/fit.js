const { Schema } = require('mongoose')

const fitSchema = new Schema(
  {
    Name: { type: Schema.Types.ObjectId, ref: 'Plant' },
    fit: [{ type: Schema.Types.ObjectId, ref: 'Plant', required: false }],
    notFit: [{ type: Schema.Types.ObjectId, ref: 'Plant', required: false }]
  },
  { timestamps: true }
)

module.exports = fitSchema
