
const mongoose = require('mongoose');



const ZoneSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true,'Ajouter le nom de la zone']
    },
    listPlace :  [
        {
            type : mongoose.Schema.ObjectId,
            ref: 'Place',
            required : [true,"Choisir les Communes"]
        }
    ] , 
    isDeleted : {
        type : Boolean,
        default : false
    } ,
     createdBy : {
        type : mongoose.Schema.ObjectId,
        ref: 'User',
        required : true
    },

 
     

});



module.exports = mongoose.model('Zone',ZoneSchema);