import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit  {

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  };

  ngOnInit(): void {
    //this.miFormulario.reset(this.persona);

    this.miFormulario.valueChanges.subscribe(form => {
      const valor = form;
      delete valor.terminos;

      this.persona = valor;
    })
  }

  guardar(){

    const value = this.miFormulario.value;
    delete value.terminos;

    this.persona = value;
  }

}
