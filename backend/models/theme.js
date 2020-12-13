const mongoose=require('mongoose');

//le schema du model (define model attributes)
const themeSchema=mongoose.Schema({
    themeName:String,
    //string avec S majiscule parce que on travaille dans le js 
    discription:String,
   category:String,
    image:String   // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const theme= mongoose.model('Theme',themeSchema)
module.exports=theme;
