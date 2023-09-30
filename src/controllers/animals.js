const Animal = require("../models/animals");
const User = require ("../models/users");

const getAnimalAll  = (req, res) => {
  Animal.find(


    (err, animal) => {
    if (err) {
      res.send(err);
    }
    res.json(animal);
  });
};

const getAnimal  = (req, res) => {
    Animal.find(
      { _id: req.params.id },

      (err, animal) => {
      if (err) {
        res.send(err);
      }
      res.json(animal);
    });
  };
  
  const createAnimal = async (req, res) => {
    try {
      console.log(req.body.userId);
      // const userFound = await User.findById(req.body.userId);

    //  console.log(userFound);
  
     // if (!userFound) return res.status(404).send({ status: false, resp: 'error', message: 'Usuario no encontrado' });
      
    const newAnimal = new Animal({
      name: req.body.name,
      age: req.body.age,
      type: req.body.type,
      description: req.body.description,
      breed: req.body.breed,
      gender: req.body.gender,
      bearing: req.body.bearing,
     // userId: req.body.userId
    });

    console.log(newAnimal)

    const animalAdded = await newAnimal.save();

    return res.status(201).send({ status: true, resp: 'ok', message: 'Animal agregado', data: animalAdded });

    } catch (error) {
      return res.status(400).send({ status: false, resp: 'error', message: error.message })
    }
  };
  
  const updateAnimal = (req, res) => {
    Animal.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            name: req.body.name,
            age: req.body.age,
            type : req.body.type,
            description : req.body.description,
            breed: req.body.breed,
            gender: req.body.gender,
            bearing: req.body.bearing,

          userId: req.body.userId
        },
      },
      { new: true },
      (err, Animal) => {
        if (err) {
          res.send(err);
        } else res.json(Animal);
      }
    );
  };
  const deleteAnimal = (req, res) => {
    Animal.deleteOne
    ({ _id: req.params.id })
      .then(() => res.json({ message: "mascota eliminada" }))
      .catch((err) => res.send(err));
  };
  module.exports = {
   getAnimal,
   getAnimalAll,
   createAnimal,
   updateAnimal,
   deleteAnimal,
  };