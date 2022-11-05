const mongoose = require('mongoose')
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;

const storeSchema = mongoose.Schema({
    name: {
        type: String, 
        trim: true, 
        required: [true, 'Please, provide a store name'],
        lowercase:true,
        enum:{
            valuse:["dhaka", "chattagram", "rajshahi", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
            message: "{VALUES} is not a valid name"
        }
    },
    description: String, 
    manager: {
        name: String,
        contactNumber: String,
        id:{
            type:ObjectId,
            ref:"User"
        }
    },
   status:{
        type:String,
        enum: ["active", 'inactive'],
        default:'active'
    }
},{
    timestamps: true
});

const Store = mongoose.model('Brand', storeSchema);

module.exports = Store;