const Sauce = require('../models/Sauce')
const fs =require('fs')

exports.createSauce = (req, res, next)=>{
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    
 const sauce= new Sauce({
     ...sauceObject,
     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 
 });

 sauce.save()
    .then(()=> res.status(201).json({message: 'Objet enregistré'}))
    .catch(error => res.status(400).json({error}));
};

exports.modifySauce = (req, res, next)=> {
    const sauceObject = req.file ?
    {
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};
    Sauce.updateOne({ _id: req.params.id}, {...sauceObject, _id: req.params.id})
    .then(()=> res.status(200).json({message: 'objet modifié'}))
    .catch(error => res.status(400).json({error}));
}

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauce => {
        const filename = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.getOneSauce =  (req, res, next)=>{
    Sauce.findOne({_id: req.params.id})
    .then((sauce) => res.status(201).json(sauce))
    .catch(error => res.status(400).json({error}))
}

exports.getAllSauce = (req, res, next)=>{
    Sauce.find()
    .then((sauces) =>{ 
   res.status(201).json(sauces);
    }).catch(
        (error) => {
            res.status(400).json({
                error
            });
         }
       );
 };
exports.createLike= (req,res)=> {

    Sauce.findOne({
        _id: req.params.id
    })
.then( sauce =>{
    //l'utilisateur n'aime pas
    if(req.body.like== 1) {
        sauce.dislikes++;
        sauce.usersDisliked.push(req.body.userId);
        sauce.save();
    
    } //l'utilisateur aime 
    if(req.body.like== 1){
        sauce.likes++;
        sauce.usersLiked.push(req.body.userId);
        sauce.save();
    }
    //l'utilisateur s'est trompé 
    if(req.body.like == 0) {
        if (sauce.usersLiked.indexOf(req.body.userId) != -1){
        sauce.likes--;
        sauce.usersLiked.splice(sauce.usersLiked.indexOf(req.body.userId), 1);
    }
    else{
        sauce.dislikes--;
        sauce.usersDisliked.splice(sauce.usersDisliked.indexOf(req.body.userId), 1);
    }
        sauce.save();
    }
    res.status(200).json({message:'like pris en compte'})
    })
   .catch(error =>{
       res.status(500).json({error})
   });

}