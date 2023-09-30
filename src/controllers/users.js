const Usuario = require("../models/users");


const getUsuarioAll = (req, res) => {
  Usuario.find((err, usuario) => {
    if (err) {
      res.send(err);
    }
    res.json(usuario);
  });
};


const getUsuario = (req, res) => {
  Usuario.find(
    { _id: req.params.id },
    

    (err, usuario) => {
    if (err) {
      res.send(err);
    }
    res.json(usuario);
  });
};

const createUsuario = async (req, res) => {
  const encryptPassword = await Usuario.encryptPassword(req.body.password);

  const usuario = new Usuario({
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age,
    rut: req.body.rut,
    email: req.body.email,
    password: encryptPassword,
    contactnumber: req.body.contactnumber,
    addres: req.body.addres,
  });
  usuario.save(function (err, usuario) {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(usuario);
  });
};

const updateUsuario = (req, res) => {
  Usuario.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        rut: req.body.rut,
        email: req.body.email,
        password: req.body.password,
        contactnumber: req.body.contactnumber,
        completed: req.body.completed,
      },
    },
    { new: true },
    (err, Usuario) => {
      if (err) {
        res.send(err);
      } else res.json(Usuario);
    }
  );
};
const deleteUsuario = (req, res) => {
  Usuario.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "usuario eliminado" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getUsuarioAll,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
