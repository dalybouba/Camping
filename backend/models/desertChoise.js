const mongoose=require('mongoose');

//le schema du model (define model attributes)
const desertChoiseSchema=mongoose.Schema({
    desertChoiseName:String,
    //string avec S majiscule parce que on travaille dans le js 
    desertChoiseDiscription:String,
   
    image:String   // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const desertChoise= mongoose.model('DesertChoise',desertChoiseSchema)
module.exports=desertChoise;
