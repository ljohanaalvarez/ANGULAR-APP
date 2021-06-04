import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public  form: FormGroup;
  private regexEmail: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
  private regexPassWord: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$';


  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      passWord: ['', [Validators.required, Validators.pattern(this.regexPassWord)]],
    })
  }

  ngOnInit(): void {
  }

  signUp(){
    if(this.form.valid){
      this.signUpService.signUpUser(
        this.form.get('name').value,
        this.form.get('email').value,
        this.form.get('passWord').value
      ).subscribe(user => {
        console.log('user', user)
        Swal.fire({
          title: '<strong>Usuario Creado Satisfactoriamente</strong>',
          icon: 'success',
          html:
            'Ahora puedes Iniciar Sesión ',
          showCloseButton: true
        });
        this.router.navigate([''])
      })
    }
    Swal.fire({
      title: '<strong>Error registrando usuario</strong>',
      icon: 'error',
      html:
        'Varifique que el correo sea válido y que la contraseña contenga de 8 a 16 carácteres, al menos una mayúscula y alguno de estos simbolos "@$!%*?&#"',
    });
  }


}
