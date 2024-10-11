const { Schema } = require('mongoose')

const typeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    hasFur: { type: Boolean, required: true },
    hasScales: { type: Boolean, required: true },
    hasBones: { type: Boolean, required: true },
    hasClaws: { type: Boolean, required: true },
    hasTeeth: { type: Boolean, required: true },
    hasArms: { type: Boolean, required: true },
    hasLegs: { type: Boolean, required: true },
  },
  { timestamps: true }
)

module.exports = typeSchema
