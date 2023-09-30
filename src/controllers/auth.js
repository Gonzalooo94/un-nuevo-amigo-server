const bcrypt = require("bcryptjs");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const { serializeUser } = require("passport");

const login = async (req, res = response) => {
  try {
    const { email, password } = req.body;
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - correo",
      });
    }

    console.log('usuario', usuario)

    //si el usuario está activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - estado: false",
      });
    }

    const matchPassword = await User.matchPassword(
      password,
      usuario.password,
    );

    if (!matchPassword)
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - password",
      });

    // req.session.token = token;
    return res.status(200).send({
      id: usuario.id,
      email: usuario.email,
      message: 'Usuario logueado correctamente'
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};



module.exports = {
  login,
};
