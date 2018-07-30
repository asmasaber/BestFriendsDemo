const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//define User Schema 
let Userschema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});
// Compile model from schema
let User = mongoose.model('User', Userschema); 
// export User Module 
module.exports = User; 