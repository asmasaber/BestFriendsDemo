import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // define id att. for questions page navigation
  @Input() id: String;
  // defina name & email att. for binding
  @Input() name: String;
  @Input() email: String;
}
