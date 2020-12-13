const mongoose=require('mongoose');

//le schema du model (define model attributes)
const menuSchema=mongoose.Schema({
    type:String,
    titre:String,
    location:String,
    //string avec S majiscule parce que on travaille dans le js 
    description:String,
    category:String,
    sousCategory:String,
    image:String   // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const menu= mongoose.model('Menu',menuSchema)
module.exports=menu;
