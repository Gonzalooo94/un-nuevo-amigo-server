const express= require("express");
const path= require("path");
const methodOverride = require("method-override");
const session = require("express-session");
require ("./database");
const Userroutes = require ("./routes/users");
const Auth = require ("./routes/auth");
const Animalroutes = require ("./routes/animals");

//initializations
const app = express();

// TODO: nueva linea
app.use(express.json());
//settings

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("refugioanimal", app.get("port"))

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//global variables
//routes
app.use("/users", Userroutes);
app.use("/auth", Auth);
app.use("/animals", Animalroutes);


//
app.get("/", (req, res) => {
  res.send("Servidor del refugio animal!!");
});
//Static files
//Server is listenning


});

