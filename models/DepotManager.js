
const mongoose = require('mongoose');

const DepotManagerSchema = new mongoose.Schema({
    userID:{
        type : mongoose.Schema.ObjectId,
        ref: 'User',
        required : true,
        unique: [true,"Choisir un utilisateur"]
        
        },
    manageIdImage: {
        type : String,
        required : [false, "envoyer nous votre image"]
    },
    createdBy : {
        type : mongoose.Schema.ObjectId,
        ref: 'User',
        required : true
    },
    isIndependant : {
        type : Boolean,
        default : false
    },
    depotOwner : {
        type : mongoose.Schema.ObjectId,
        ref: 'DepotOwner',
        required : true

    },
    isDeleted : {
        type : Boolean,
        default : false
    }
 
     

});



module.exports = mongoose.model('DepotManager',DepotManagerSchema);