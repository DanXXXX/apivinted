
const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
        // index:true,
    },
    description:{
        type:String,
        required: true,
        
    },
    price:{
        type:Number, 
        required: true,
        
    },
    stock:{
        type:Number,
        required: true,
        
    },
    image:{
        type:String,
        default: "./uploads/profil/random-user.png",
        
    },
    userId :{
        type: Schema.Types.ObjectId,
        ref  : "User"
    },
    createdAt: {
        type: Date, default: Date.now()
    }

});

//Export the model
module.exports = mongoose.model('Product', ProductSchema);