const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
    Prénom: {
        type: String,
        required: true
    },
    Mail: {
        type: String,
        required:true,
        unique:true
    },
    Mdp: {
        type: String,
        required:true
    },
    Département: {
        type: String,
        required:true
    },
    Role: {
        type: String,
        required:true
    }

});

const User = mongoose.model('User', UserSchema);

console.log(User);

module.exports = mongoose.model('User', UserSchema);