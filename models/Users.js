const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    firstName:{type:String},
    MiddleName:{type:String},
    LastName:{type:String},
    email:{type:String},
    mobile:{type:String},
    city:{type:String},
    gender:{type:String}
},{timestamp:true})

const Emp = mongoose.model('Emp',userschema);
module.exports = Emp