var mongoose = require('mongoose');

// Define Schema
var goldSchema = new mongoose.Schema({
    gold: Number
})

mongoose.model('Gold', goldSchema);
//var Gold =mongoose.model('Gold', goldSchema);