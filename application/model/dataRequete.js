const mongoose = require('mongoose');

const RequeteSchema = new mongoose.Schema({
    Nom_Doc: {
        type: String,
        required: true
    },
    Type_Doc: {
        type: String,
        required: true
    },
    Nb_page: {
        type: Number,
        required:true
    },
    Nb_exemplaire: {
        type: Number,
        required:true
    },
    Recto: {
        type: Boolean,
        required:true
    },
    Agrafe: {
        type: Boolean,
        required:true
    },
    date_creation:{
        type:Date,
        default:Date.now
    },
    date_retour:{
        type:Date,
        required:true
    },
    Status:{
        type:String,
        default:"Ouvert"
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Reprographe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        default:null
    }

});

const Requete = mongoose.model('Requete', RequeteSchema);

console.log(Requete);

module.exports = mongoose.model('Requete', RequeteSchema);