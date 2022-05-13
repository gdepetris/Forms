import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {


nombreApellidoPatern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
 

  constructor() { }

  nick( argumento: FormControl): ValidationErrors | null{
    const valor = argumento.value?.trim().toLowerCase();

    if(valor==='nick'){
      return {
        noNick: true
      }
    }

    return null
  }

  camposIguales(campo1: string, campo2: string){
    return (control: AbstractControl): ValidationErrors | null => {
      
      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;

      if(pass1!==pass2){
        return {noIguales: true}
      }

      return null
    }
  }

}
