import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: favorito[]
}

interface favorito{
  id: number;
  nombre: string;
}




@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = ''

  persona: Persona ={
    nombre: 'Gian',
    favoritos: [{
      id:1,
      nombre: 'Kingdom Hearts'
    },{
      id:2,
      nombre: 'Skyrim'
    }]
  }

  guardar(){
    console.log("F")
  }

  eliminar(i: number){
    this.persona.favoritos.splice(i, 1);
  }

  agregarJuego(){
    const nuevoFavorito: favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    console.log(nuevoFavorito);

    this.persona.favoritos.push(nuevoFavorito);

    this.nuevoJuego=''
  }

}
