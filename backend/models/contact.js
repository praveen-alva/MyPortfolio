const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email: {
        type:String,
        require:true,
    },
    subject: {
        type:String,
        require:true,
    },
    message: {
        type:String,
        require:true,
    },
    createdAt: {
        type:Date,
        default:Date.now,
    }


});
module.exports=mongoose.model('contact',contactSchema);