const { check } = require("express-validator");
const { validateFields } = require("../shared/express-validator/validate_fields");
const express = require("express");
const router = express.Router();

const {getAnimal,getAnimalAll, createAnimal, updateAnimal, deleteAnimal} = require ("../controllers/animals");

router.get("/construyendo2", (req, res) => {
  res.send("Construyendo una api!");
});

router.get("/:id", getAnimal);
router.get("/", getAnimalAll);


router.post("/", [
  check("name", 'El nombre es obligatorio').not().isEmpty(),
  check("age", 'la edad es obligatoria').not().isEmpty(),
  check("type", 'El tipo de animal es obligatorio(s)').not().isEmpty(),
  check("description", 'La descripcion es obligatorio').not().isEmpty(),
  check("breed", 'El  breed es obligatorio').not().isEmpty(),
  check("gender", "El gender es obligatorio").not().isEmpty(),
  check("bearing", "El bearing es obligatorio").not().isEmpty(),
], validateFields, createAnimal);

router.put("/:id", [
  check("id", "No es un ID válido").isMongoId(),
  check("name", 'El nombre es obligatorio').not().isEmpty(),
  check("age", 'la edad es obligatoria').not().isEmpty(),
  check("type", 'El tipo de animal es obligatorio(s)').not().isEmpty(),
  check("description", 'La descripcion es obligatorio').not().isEmpty(),
  check("breed", 'El  breed es obligatorio').not().isEmpty(),
  check("gender", "El gender es obligatorio").not().isEmpty(),
  check("bearing", "El bearing es obligatorio").not().isEmpty(),
  check("userId", "El usuario id es obligatorio").not().isEmpty(),
  check("userId", "No es un ID válido").isMongoId(),
],validateFields, updateAnimal);

router.delete("/:id",[
  check("id", "No es un ID válido").isMongoId(),
],validateFields, deleteAnimal);

module.exports = router;
