const mongoose = require("mongoose");


const DB_URI = "mongodb+srv://admin:delfin123@nuevoamigo.rue6ioh.mongodb.net/?retryWrites=true&w=majority"

     mongoose.connect( DB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true


     });

mongoose.connection.on("connected", () => {
    console.log("base de datos conectada");
    

    });

    