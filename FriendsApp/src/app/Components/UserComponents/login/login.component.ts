import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UsersService} from './../../../Services/users.service';
import {User} from './../../../Modules/user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // flag to show login error msg
  invalidLogin: boolean ;
  constructor(private service: UsersService, private router: Router) { }
  ngOnInit() {
    // if there is user saved in localStroge, re-direct to home Page without login
    if (localStorage.id != null) {
      this.router.navigate(['/home']);
    }
  }
  login(email, password) {
   // call login service
   this.service.login(email, password).subscribe((user: User) => {
    localStorage.clear();
     // if User obj Returened save it in local storge then rediracte to profile
     if (user) {
         localStorage.name = user.name;
         localStorage.id = user._id;
         localStorage.email = user.email;
         this.router.navigate(['/home']);
     } else {
       // else show error message
       this.invalidLogin = true;
      }
   });

  }
}
