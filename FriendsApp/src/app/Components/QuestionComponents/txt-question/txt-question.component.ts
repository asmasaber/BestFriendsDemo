import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-txt-question',
  templateUrl: './txt-question.component.html',
  styleUrls: ['./txt-question.component.css']
})
export class TxtQuestionComponent implements OnInit {
  @Input() id: String;
  @Input() text: String;
  constructor() { }

  ngOnInit() {
  }

}
