import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  readonly url:string = environment.url_users;

  constructor(
    private http: HttpClient,
  ) { }

  signUpUser(name:string, email:string, password:string){
    const newUser: User = {name, email, password};
    return this.http.post<User>(this.url, newUser);
  }
}
