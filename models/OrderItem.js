
const mongoose = require('mongoose');


const OrderItemSchema = new mongoose.Schema({
 
orderID : 
        {
            type : mongoose.Schema.ObjectId,
            ref: 'Order',
            required : true 

        },

productId : {
    type : mongoose.Schema.ObjectId,
    ref: 'Product',
    required : true
},
quantity : {
    type : Number,
    required : [true,"Entrer la quantité"]
},
price : {
    type : Number,
    required : true
},


 
});



module.exports = mongoose.model('OrderItem',OrderItemSchema);