const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./app')

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log(`Database connection is successfull`)
})


