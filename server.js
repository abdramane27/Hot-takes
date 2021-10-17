//------création du serveur

//-----package Node js
//const http= require("http");
//console.log(http);

//----import de l'app.js---------
const app = require("./app");

app.set("port", 3000);


//const server =http.createServer(app);
app.listen( 3000);