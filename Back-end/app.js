// importer express-------
const express = require("express");

//---import morgan--------
const morgan = require("morgan")
//--import mongoose----
const moongoose = require("./db/db");

const path = require('path');

//-------import des routes----------
const userRoutes = require("./routes/user");

const saucesRoutes= require("./routes/sauce")

//---import de body-parser----------
const bodyParser = require("body-parser");

const cors = require('cors');


// Création de l application express
const app = express();

//------logger les requetes et les reponse
app.use(morgan("dev"));

app.use(cors());

//----mise en place du CORS----------
app.use((req, res, next)=>{
    console.log(req)
res.setHeader("Acces-Control-Allow-Origin","*");
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



app.get('/', (req, res) => {
    res.send('REST API PROJET 6 OPEN CLASSROOMS!')
  });

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", saucesRoutes);

// Exportation de l'app.js
module.exports= app;
