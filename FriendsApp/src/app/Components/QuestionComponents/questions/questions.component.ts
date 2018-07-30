import { element } from 'protractor';
import { Answer } from './../../../Modules/answer.module';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../Services/questions.service';
import { Question } from '../../../Modules/question.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  answers: Answer[];
  // Api base Url
  uri = 'http://localhost:4000';
  constructor(private service: QuestionsService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // if there is user saved in localStroge, re-direct to home Page without login
    if (localStorage.id == null) {
        this.router.navigate(['/login']);
    } else {
      // get id from url
      const id = this.activeRoute.snapshot.params.id;
      // call getQuestions to get User Questions by it's ID
      this.service.getQuestions(id).subscribe((questions: Question[]) => {
        // tslint:disable-next-line:max-line-length
        // if Questions List Returened set it in defianed List Questions to bind them, and create answeres array with same length to save it's answers
        if (questions) {
        this.questions = questions;
        this.answers = new Array(this.questions.length);
        } else {
          console.log(' error ');
        }
      });
  }
  }
  // method to filter questions by type
  filterItemsOfType(type) {
    if (this.questions) {
      return this.questions.filter(x => x.type === type);
    }
}
// collect questions answers then call submit answer Service to save friend answers
submitAnswers() {
  this.answers = [];
// collect answers as [{userId, questionId, answer}, ...]
  this.questions.forEach( (element: Question) => {
    const answer = {'_id': '','userId': localStorage.id, 'questionId': element._id,  'answer': document.getElementById(element._id + '').value};
    this.answers.push(answer);
});
// call submit answer Service to save friend answers
this.service.answerQuestions(this.answers).subscribe((msg) => {
  if (msg) {
   console.log(msg);
  } else {
    console.log(' error ');
   }
});
}
}
