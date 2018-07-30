const express =  require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

const User = require('./Models/User.model');
const Question = require('./Models/Question.model');
const Answer = require('./Models/Answer.model');

// DB host Url
mongoose.connect('mongodb://localhost:27017/bestFriends');
const connection = mongoose.connection;

// try to open connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
// end point: to get all users 
// get users data from users collection
router.route('/users').get((req, res) => {
    User.find((err, users) => {
        if (err)
            console.log(err);
        else
            res.json(users);
    });
});
// end point: to get users expect Current User, take userId from body
// get users data from users collection
router.route('/friends').post((req, res) => {
    User.find({_id: {$ne: req.body.userId}} ,(err, users) => {
        if (err)
            console.log(err);
        else
             return res.json(users);
    });
});
// end point: to get user by email & password, take email & password from body
// get user data from users collection by email & password
router.route('/login').post((req, res) => {
    User.findOne({email: req.body.email , password: req.body.password} ,(err, user) => {
        if (err)
            console.log(err);
        else
             return res.json(user);
    });
});
// end point: to get all questions
// get questions from questions collection 
router.route('/questions').get((req, res) => {
    Question.find((err, questions) => {
        if (err)
            console.log(err);
        else
            res.json(questions);
    });
});
// end point: to get user questions, take cuserId from body 
// get questions from questions collection by userId
router.route('/user/questions').post( (req, res) => {
    console.log('user/questions');
    Question.find({userId: req.body.userId }, (err,questions) => { 
        if (err)
            return console.log(err);
        else
        {
            console.log(req.body.userId);
            return res.json(questions);
        }
    });
});
// end point: to add questions by user, take list of question objects from body 
// insert questions in questions collection 
router.route('/questions').post( (req, res) => {
    console.log(req.body);
    Question.collection.insert(req.body, (err) => { 
        if (err)
            return console.log(err);
        else
            return res.send("Quiz added seccussflly");
    });
});
// end point: to answer questions by user Friend, take list of answer objects from body 
// insert answers in answers collection 
router.route('/questions/answer').post( (req, res) => {
    console.log(req.body);
    Answer.collection.insert(req.body, (err) => { 
        if (err)
            return console.log(err);
        else
            return res.send("Quiz answered seccussflly");
    });
});
app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));