//----------import de mongoose----
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//---construction du schéma pour la base de données----------
const userSchema = mongoose.Schema({
    email:{type: String, required: true, unique: true},
    password : {type: String, required: true}

});

userSchema.plugin(uniqueValidator)
//----export du module-----
module.exports= mongoose.model("user",userSchema);