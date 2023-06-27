const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    udate: {
        type: Date,
        default: new Date()
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const Notes = mongoose.model('notes', NotesSchema);
module.exports = Notes;