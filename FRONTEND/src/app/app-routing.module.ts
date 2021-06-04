import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SignupComponent } from './components/signup/signup.component';
import { GuardiaPrincipalService } from './services/guardia-principal.service';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'principal', component: PrincipalComponent, canActivate:[GuardiaPrincipalService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
