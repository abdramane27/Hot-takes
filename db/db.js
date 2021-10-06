
//----Connexion mongodb-------
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://alSeyni:P4MSJw5e4kc3$RT@cluster0.pxhla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology : true})
.then(()=> console.log("connexion réussie"))
.catch(()=> console.log("connexion échoué"));





module.exports = mongoose;