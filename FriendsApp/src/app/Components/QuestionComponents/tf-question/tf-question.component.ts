import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tf-question',
  templateUrl: './tf-question.component.html',
  styleUrls: ['./tf-question.component.css']
})
export class TfQuestionComponent implements OnInit {
  @Input() id: String;
  @Input() text: String;
  constructor() { }

  ngOnInit() {
  }

}
