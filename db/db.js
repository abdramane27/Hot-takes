//------Utilisation des variables environnement------
const dotenv = require("dotenv");
const result = dotenv.config();
console.log(result);




//----Connexion mongodb-------
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://alSeyni:<P4MSJw5e4kc3$RT>@clusterhottakes.pxhla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);


}
module.exports = mongoose;