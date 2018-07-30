import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
   // get user questions
   getQuestions(userId) {
    return this.http.post(`${this.uri}/user/questions`, {userId : userId});
  }
  answerQuestions(answers) {
    return this.http.post(`${this.uri}/questions/answer`, answers);
  }
}
