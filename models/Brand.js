const mongoose = require('mongoose')
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;

const brandSchema = mongoose.Schema({
    name: {
        type: String, 
        trim: true, 
        required: [true, 'Please, provide a brand name'], 
        maxlength: 100, 
        unique: true,
        lowercase:true,
    },
    description: String, 
    email: {
        type: String, 
        lowercase: true,
        validate: [validator.isEmail, "please, provide a valid email"],
    },
    website:{
        type: String, 
        lowercase: true,
        validate: [validator.isURL, 'Please, provide a valid website'],
    },
    location: String,
    products:[{
        type: ObjectId,
        ref: "Product"
    }],
    suppliers: [{
        name: String,
        contactNumber: String,
        id:{
            type: ObjectId, 
            ref: "Supplier"
        }
    }],
    status:{
        type:String,
        enum: ["active", 'inactive'],
        default:'active'
    }
},{
    timestamps: true
});

const Brand = mongoose.model('Brand', brandSchema);

exports = Brand;