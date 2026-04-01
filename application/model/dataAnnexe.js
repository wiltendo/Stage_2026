const mongoose = require('mongoose');

const AnnexeSchema = new mongoose.Schema({
    Nom_Liste: {
        type: String,
        required: true
    },
    Valeur:[String]
});

const Annexe = mongoose.model('Annexe', AnnexeSchema);

console.log(Annexe);

module.exports = mongoose.model('Annexe', AnnexeSchema);