

const mongoose = require('mongoose');


const PlaceSchema = new mongoose.Schema({
    province:{
        type : String,
        required : [true,'Aujouter une province']
    },
    ville : {
        type : String,
        required : [true,"Ajouter une ville"]
    },
    commune : {
        type : String,
        required : [true,"Ajouter une commune"]
    },
    createdBy : {
        type : mongoose.Schema.ObjectId,
        ref: 'User',
        required : true
    },
    isDeleted : {
        type : Boolean,
        default : false
    } ,

});



module.exports = mongoose.model('Places',PlaceSchema);