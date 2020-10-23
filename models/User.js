const mongoose = require('mongoose');
const x = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name : {
       type : String,
       required : [true,'Veuillez ajouter votre nom svp !']
    },
    fistname : {
       type : String,
       required : [true,'Veuillez ajouter votre prénom svp !']
    },
    role : {
       type : String,
       enum : [
          'user',
          'depotowner',
          'depotmanager',
          'deliverboy',
          'admin',
          'superadmin'
       ],
       default : 'user'
    },
    isDepotOwner : {
       type : Boolean,
       default : false
    },
    isDepotManager : {
       type : Boolean,
       default : false
    },
    isAdmin : {
       type : Boolean,
       default : false
    },
    isDeliverBoy : {
       type : Boolean,
       default : false
    },
    phone : {
       type : String,
       required : [true, 'Ajouter un numéro de téléphone '],
       maxlength : [12,'Erreur,Numéro incorrect'],
       unique : [true,"Ce numéro est  dèja enregistrer dans le système !"]
    },
    password : {
       type : String,
       required : [true,'Veuillez ajouter un mot de passe'],
       minlength : 6
    },
    photo_url : {
       type : String,
       required : false
    },
    sexe : {
       type : String,
       enum : [
          'M',
          'F'
       ]
    },
    place : {
       type : mongoose.Schema.ObjectId,
       ref  : 'Place',
       required : false
    },
    geoloc : {
       lat : Number,
       long : Number
    }
});

UserSchema.plugin(x);
module.exports = mongoose.model('User',UserSchema);