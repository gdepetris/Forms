import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  @ViewChild('formulario') formulario!: NgForm;

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formulario)

    this.formulario.resetForm({
      producto: '',
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(){
    return this.formulario?.controls["producto"]?.invalid && this.formulario?.controls["producto"].touched
  }

  precioValido(){
      return this.formulario?.controls["precio"]?.invalid && this.formulario.controls["producto"].touched
  }

  existenciasValidas(){
    return this.formulario?.controls["existencias"]?.invalid && this.formulario.controls["existencias"].touched
  }

}
