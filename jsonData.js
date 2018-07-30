
db.users.insert({
 name: 'asma',
 email: 'asma@mail.com',
 password: '123'
})

db.users.insert({
 name: 'afnan',
 email: 'afnan@mail.com',
 password: '123'
})


db.questions.insert({ 
    type: "text",
    text: "question1 ?",
    quizNum: 1,
    userId: ObjectId("5b5884c7f0890f415e2ac528"),  
    answer: "bla bla"                            
})
db.questions.insert({ 
    type: "mcq",
    text: "question ?",
    quizNum: 1,
    userId: ObjectId("5b5884c7f0890f415e2ac528"),
    options: ["answer1","answer2" ],     
    answer: "answer1" 
} )

db.answers.insert({ 
        answer: "bla bla",
        questionId: ObjectId("5b5887c8f0890f415e2ac52c"),
        friendId: ObjectId("5b5884c7f0890f415e2ac529")
} )

