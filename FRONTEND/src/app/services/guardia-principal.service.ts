import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaPrincipalService implements CanActivate{

  constructor(
    private storageService: SessionStorageService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const token = this. storageService.getToken();
    if(token){
      return true
    }
    this.router.navigate(['/']);
    return false

  }
}
