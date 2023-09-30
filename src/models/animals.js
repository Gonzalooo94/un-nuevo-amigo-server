const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true},
  breed: { type: String, required: true},
  gender: { type: String, required: true },
  bearing: { type: String, required: true},
  userId: {
    ref: "Users",
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("animal", animalSchema);
