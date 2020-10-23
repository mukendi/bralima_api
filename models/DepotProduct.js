
const mongoose = require('mongoose');



const DepotProductSchema = new mongoose.Schema({
    depot:{
        type : mongoose.Schema.ObjectId,
        ref: 'Depot',
        required : [true,"Choisir un dépot"]
    },
   product :{
    type : mongoose.Schema.ObjectId,
    ref: 'Product',
    required : [true,"Choisir un Product"]
   },
   startingInvertory : Number,
   inventoryReceived : Number,
   inventorOnHand : Number,
   inventorShiped : Number,
   minimumRequired : Number,
  price : {
      fc : Number

  },
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



module.exports = mongoose.model('DepotProduct',DepotProductSchema);