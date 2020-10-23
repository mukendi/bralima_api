const mongoose = require('mongoose');

const DeliverSchema = new mongoose.Schema({
   orderId : {
      type : mongoose.Schema.ObjectId,
      ref : 'Order',
   },
   depotId : {
      type : mongoose.Schema.ObjectId,
      ref : 'Depot'
   },
   customerId : {
      type : mongoose.Schema.ObjectId,
      ref : 'User'
   },
   whenAssigned : Date,
   deliverId : {
      type : mongoose.Schema.ObjectId,
      ref : 'User'
   }
})