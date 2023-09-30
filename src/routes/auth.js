
const express = require("express");
const { check } = require('express-validator');
const { validateFields } = require("../shared/express-validator/validate_fields");

const router = express.Router();



const{
    login } = require ("../controllers/auth");

router.post("/login",[
   check('email', 'El correo es obligatorio').isEmail(),
   check('password', 'La contraseña es obligatoria').not().isEmpty(),
], validateFields, login);



module.exports = router
