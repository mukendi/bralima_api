const mongoose = require('mongoose');

const DepotOwnerSchema = new mongoose.Schema({
    ownerUser:{
            type : mongoose.Schema.ObjectId,
            ref: 'User',
            required : [true,"Veuillez choisir un utilisateur"],
            unique : [true,"Utilisateur Choisi existe deja"]
        
    },
    isDeleted : {
        type: Boolean,
        default : false
    },
    isValid: {
        type : Boolean,
        default : false

    } ,
    entrepriseInfo : {
        name : String,
        address : String ,
        idna : String,
        numeroImpot : String,
        rccm : String,
        imageDocu : [String]
    },
    ownerIdImage: {
        type : String,
        required : [false, "envoyer nous votre image"]
    },

 
     

});




module.exports = mongoose.model('DepotOwner',DepotOwnerSchema );