
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    description:{
        type:String,
        
    },
    price:{
        type:Number,
        
    },
    stock:{
        type:Number,
        
    },
    image:{
        type:String,
        
    },
    userId:{
        type: Schema.type.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date, default: Date.now()
    }

});

//Export the model
module.exports = mongoose.model('Product', ProductSchema);