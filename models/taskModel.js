const mongoose= require('mongoose');

const taskSchema= mongoose.Schema({
title:{
    type: String,
    required:[true, 'A task Must have a title'],
    maxlength: [40, 'A task must have less or equal then 40 characters'],
    minlength: [3, 'A task must have more or equal then 10 characters'],
},

title:{
    type: String,
    required:[true, 'A task Must have a description'],
    maxlength: [40, 'A task must have less or equal then 40 characters'],
    minlength: [3, 'A task must have more or equal then 10 characters'],
}

});


const Task= mongoose.model('Task', taskSchema);

module.exports= Task;