import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private vs: ValidatorService, private emailValidator: EmailValidatorService) { }

  errorMsg: string = '';

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Gianfranco Depetris',
      email: 'giandepetrisasir@gmail.com',
      username: 'Insomnia',
      password: '123456',
      password2: '123456'
    })
  }



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPatern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.nick]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators: [ this.vs.camposIguales('password', 'password2')]
  })

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  submit(){
    this.miFormulario.markAllAsTouched();

    console.log(this.miFormulario.value)
  }

  erroresMail(): boolean {
    if(this.miFormulario.get('email')?.errors?.['required'] && this.miFormulario.get('email')?.touched){
      this.errorMsg = 'El correo electrónico es obligatorio'
      return true;
    } else if(this.miFormulario.get('email')?.errors?.['pattern'] && this.miFormulario.get('email')?.touched){
      this.errorMsg = 'El correo no usa un formato correcto'
      return true;
    } else if(this.miFormulario.get('email')?.errors?.['emailOcupado'] && this.miFormulario.get('email')?.touched){
      this.errorMsg = 'El correo que está usando ya está registrado'
      return true;
    } else {
      this.errorMsg = ''
      return false;
    }
  }


}
