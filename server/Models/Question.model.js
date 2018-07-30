const mongoose = require('mongoose');
const Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
//define Question Schema 
let Questionschema = new Schema({
    type: {
        type: String
    },
    text: {
        type: String
    },
    quizNum: {
        type: Number
    },
    userId: {
        type: ObjectId
    },
    answer: {
        type: String
    }
});
// Compile model from schema
let Question = mongoose.model('Question', Questionschema); 
// export User Module 
module.exports = Question; 