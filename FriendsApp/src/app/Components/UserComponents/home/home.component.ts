import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../Services/users.service';
import { User } from '../../../Modules/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // define fiends list to fill it with friends info then use it in binding
  friends: User[];
  currentUserEmail: String;
  // define userService to call service that get user Friends & router to redirect to home page inCase user loged-in before
  constructor(private service: UsersService, private router: Router) { }

  ngOnInit() {
    // if there is user saved in localStroge, re-direct to home Page without login
    if (localStorage.id == null) {
      this.router.navigate(['/login']);
    }
    this.currentUserEmail = localStorage.email ;
    // call service that get friends of current User
    this.service.getFriends(localStorage.id).subscribe((users: User[]) => {
       if (users) {
        this.friends = users;
       } else {
         console.log(' error ');
        }
     });
  }
  // clear localStorge & navigate to login
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
