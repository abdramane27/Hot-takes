//------création du serveur

//-----package Node js
const http= require("http");
console.log(http);

//----import de l'app.js---------
const app = require("./app");

//----import du package environnement
const dotenv = require("dotenv");
const result = dotenv.config();

app.set("port", process.env.PORT);


const server =http.createServer(app);
server.listen( process.env.PORT);