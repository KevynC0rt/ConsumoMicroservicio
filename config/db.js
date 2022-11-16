const mongoose = require("mongoose");

// Copia la URL del sitio de mongo DB
const MONGOURI = "mongodb+srv://Kevyn_Cortez:jkcr2401@cluster0.we2i6.mongodb.net/?retryWrites=true&w=majority";

//const MONGOURI = "mongodb+srv://KevynC0rtez:yLhJpcQhQzw_7KqQYK3v1n@cluster0.jnmbt.mongodb.net/?retryWrites=true&w=majority";
const MongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la BD !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
 
module.exports= MongoServer;