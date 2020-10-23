const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   name : {
      type : String,
      required : [true,"Entrer le nom du Produit svp !"],
      unique : [true,"Ce Produit est dejà enregistré"]
   },
   description  : {
      type : String
   },
   photo_url : {
      type : String
   },
   category : {
      type : String,
      enum : ['biere','sucré'],
      default : 'biere',
   },
   price : {
      type : String,
      required : [true,"Veuillez donner le prix du produit svp !!!"]
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
});

module.exports = mongoose.model('Product',ProductSchema);
