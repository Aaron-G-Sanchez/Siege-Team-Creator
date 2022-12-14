const { Schema } = require('mongoose')

const Operator = new Schema(
  {
    name: { type: String, require: true },
    primary: [{ type: String, require: true }],
    secondary: [{ type: String, require: true }],
    utility: [{ type: String, require: true }],
    ability: { type: String, require: true },
    team: { type: String, require: true },
    icon: { type: String, require: true },
    image: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = Operator
