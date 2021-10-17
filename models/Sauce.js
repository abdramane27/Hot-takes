const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
    userId:{type: String, required:true},
    
    dislikes :{type: Number},

    dislikedBy:{type:Array}

});
module.exports= mongoose.model("Sauce",sauceSchema);