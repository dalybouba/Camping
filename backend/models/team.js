const mongoose=require('mongoose');

//le schema du model (define model attributes)
const teamSchema=mongoose.Schema({
    name:String,
    //string avec S majiscule parce que on travaille dans le js 
    discription:String,
    lienFb:String, 
    image:String   // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const team= mongoose.model('Team',teamSchema)
module.exports=team;
