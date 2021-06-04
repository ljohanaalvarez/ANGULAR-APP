import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public  form: FormGroup;
  private regexEmail: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
  private regexPassWord: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern(this.regexEmail)]],
      passWord:['',[Validators.required, Validators.pattern(this.regexPassWord) ]],
    })
  }

  ngOnInit(): void {
  }

  logIn(){

    if(this.form.valid){
      const email= this.form.get('email')?.value;
      const passWord=this.form.get('passWord')?.value;
      this.authService.auth(email, passWord)
      }
      Swal.fire({
        title: '<strong>Error iniciando sesión</strong>',
        icon: 'error',
        html:
          'Varifique usuario y contraseña',
      });
    }

}
