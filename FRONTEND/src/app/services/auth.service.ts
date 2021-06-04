import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url: string = environment.url_auth;

  constructor(
    private http: HttpClient,
    private sessionStorage: SessionStorageService,
    private router: Router
  ) { }


  auth(email:string, password:string){
    const user ={email, password}
    this.http.post<any>(this.url,user).subscribe(response =>{
      console.log(response)
      this.sessionStorage.setToken(response.token);
      this.router.navigate(['/principal'])
    })
  }
}
