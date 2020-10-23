
const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
  WhenMade : {
      type : Date ,
      default : Date.now,

  },
 customer : {
    type : mongoose.Schema.ObjectId,
    ref: 'User',
    required : true 
  } ,
 status : {
    type : String,
    enum : [
        'pending',
        'accepted',
        'canceled',
        'shiped',
        'delivered',
        'issue'
    ],
    default : "pending"
  },
  depot : 
        {
            type : mongoose.Schema.ObjectId,
            ref: 'Depot',
            required : true 

        }
 ,
 paymentMethode : {
    type : String,
    enum : [
        "cash on deliver",
        "mobile money",
        "debit card"
    ]
  },
  IsPayed : {
    type:Boolean,
    default : false
 },
  totalPrice : {
    type : Number
 },
  details: {
    type : String
},
shippingAdress : String
 
});



module.exports = mongoose.model('Order',OrderSchema);