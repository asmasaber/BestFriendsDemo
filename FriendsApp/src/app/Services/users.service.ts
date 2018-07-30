import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Api base Url
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  // get user info by email & password (if exists)
  login(email, password) {
    return this.http.post(`${this.uri}/login`, {email : email, password: password});
  }
  // get all users but not current user
  getFriends(userId) {
    return this.http.post(`${this.uri}/friends`, {userId : userId});
  }
}
