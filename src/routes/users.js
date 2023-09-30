const { check } = require("express-validator");
const { validateFields } = require("../shared/express-validator/validate_fields");
const express = require("express");
const router = express.Router();

const{
  getUsuario, getUsuarioAll, createUsuario, updateUsuario,deleteUsuario} = require ("../controllers/users");


router.get("/construyendo", (req, res) => {
  res.send("Construyendo una api!");
});

router.get("/:id", getUsuario);
router.get("/", getUsuarioAll);


router.post("/", [
  check("name", 'El nombre es obligatorio').not().isEmpty(),
  check("lastname", 'El apellido es obligatorio').not().isEmpty(),
  check("age", 'La edad es obligatoria').not().isEmpty(),
  check("rut", 'El rut es obligatorio').not().isEmpty(),
  check('email', 'El correo no es válido').isEmail(),
  check('password', 'El password debe tener más de 6 letras').isLength({ min: 6 }),
  check("contactnumber", 'El numero de contacto es obligatorio').not().isEmpty(),
  check("addres", 'la dirrecion es obligatoria').not().isEmpty(),
], validateFields, createUsuario);

router.put("/:id", [
  check("name", 'El nombre es obligatorio').not().isEmpty(),
  check("lastname", 'El apellido es obligatorio').not().isEmpty(),
  check("age", 'La edad es obligatoria').not().isEmpty(),
  check("rut", 'El rut es obligatorio').not().isEmpty(),
  check('email', 'El correo no es válido').isEmail(),
  check('password', 'El password debe tener más de 6 letras').isLength({ min: 6 }),
  check("contactnumber", 'El numero de contacto es obligatorio').not().isEmpty(),
  check("addres", 'la dirrecion es obligatoria').not().isEmpty(),
], validateFields, updateUsuario);
  

router.delete("/:id",[
  check("id", "No es un ID válido").isMongoId(),
],validateFields, deleteUsuario);



module.exports = router