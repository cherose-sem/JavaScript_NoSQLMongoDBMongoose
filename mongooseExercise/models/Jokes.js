'use strict'
let mongoose = require("mongoose");

let JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: true, 
        minlength: 5 
    },
    category: [String],
    reference: {
        author: String, 
        link: String
    },
    lastEdited: {
        type: Date, 
        default: new Date()
    }
});

JokeSchema.pre('save',function(next){
this.lastEdited = new Date();
next();
});

mongoose.model("Joke",JokeSchema);
