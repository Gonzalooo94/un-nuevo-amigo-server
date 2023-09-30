const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  lastname: { type: String, required: true},
  age: { type: Number, required: true },
  rut: { type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true},
  estado: { type: Boolean, required: true, default: true },
  contactnumber: { type: Number, required: true},
  addres: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
userSchema.statics.matchPassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = mongoose.model("Users", userSchema);
