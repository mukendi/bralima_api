const mongoose = require('mongoose');

const DepotSchema = new mongoose.Schema({
 name : {
    type : String,
    required : [true, 'Entrer le nom du Dépot']
 },
 depotOnwer : {
    type : mongoose.Schema.ObjectId,
    ref  : 'DepotOnwer',
    required : true
 },
 depotManager : {
    type : mongoose.Schema.ObjectId,
    ref  : 'DepotManager',
    required : true
 },
 place : {
    type :mongoose.Schema.ObjectId,
    ref : 'Place',
    required : true
 },
 address : {
    type : String,
    required : [false, "Entrer l'adresse"],
    maxlength : [600, 'Pas plus de 600 caractères']
 },
 isDeleted : {
    type : Boolean,
    default : false
 }
});

module.exports = mongoose.model('Depot',DepotSchema);