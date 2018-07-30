const mongoose = require('mongoose');
const Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
//define Answer Schema 
let Answerschema = new Schema({
    userId: {
        type: ObjectId
    },
    questionId: {
        type: ObjectId
    },
    answer: {
        type: String
    }
});
// Compile model from schema
let Answer = mongoose.model('Answer', Answerschema); 
// export Answer Module 
module.exports = Answer; 