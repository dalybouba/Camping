const mongoose=require('mongoose');

//le schema du model (define model attributes)
const userSchema=mongoose.Schema({
    firstName:String,
    //string avec S majiscule parce que on travaille dans le js 
    lastName:String,
    email:String,
    pwd:String,
    tel:String,
    image:String   // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const user= mongoose.model('User',userSchema)
module.exports=user;
