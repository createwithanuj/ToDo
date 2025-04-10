const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date : {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('ToDo', toDoSchema);