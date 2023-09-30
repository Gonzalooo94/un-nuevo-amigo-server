
const userRoutes = require("./users");
const AuthRoutes = require ("./auth")
const animalRoutes = require ("./animals");
const express = require("express");

const router = express.Router();


router.use("/auth", AuthRoutes)
router.use("/users", userRoutes)
router.use ("/animals", animalRoutes) ;

router.get("/",( req, res)  => {
    res.send("Index");
});

module.exports = router;
