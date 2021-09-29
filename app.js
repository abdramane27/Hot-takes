// importer express-------
const express = require("express");

//---import morgan--------
const morgan = require("morgan")
//--import mongoose----
const moongoose = require("./db/db");

//-------import des routes----------
const userRoutes = require("./routes/user");

//---import de body-parser----------
const bodyParser = require("body-parser");

// Création de l application express
const app = express();
//------logger les requetes et les reponse
app.use(morgan("dev"));

//----mise en place du CORS----------
app.use((req, res, next)=>{
    console.log(req)
res.setHeader("Acces-Control-Allow-Origin","(*)");
res.setHeader(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
);
res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
);
next();
});


app.use(bodyParser.json());


//---Route d'authanfication----
app.use("/api/auth", userRoutes);


// Exportation de l'app.js
module.exports= app;