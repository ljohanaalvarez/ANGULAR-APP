import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  setToken(token:string){
    window.sessionStorage.setItem('token',token)
  }

  getToken():string{
    return window.sessionStorage.getItem('token')
  }

}
