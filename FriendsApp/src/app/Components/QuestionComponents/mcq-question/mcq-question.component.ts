import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mcq-question',
  templateUrl: './mcq-question.component.html',
  styleUrls: ['./mcq-question.component.css']
})
export class McqQuestionComponent {
  @Input() id: String;
  @Input() text: String;
  @Input() answers: String[];
  constructor() { }
}
