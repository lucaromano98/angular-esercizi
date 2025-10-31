import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cambia-colore',
  imports: [NgClass],
  templateUrl: './cambia-colore.html',
  styleUrl: './cambia-colore.scss',
})
export class CambiaColore {
   
  coloreClasse = signal('bg-blue-500 text-white');

  cambiaColore(){
    const colori = [
      'bg-blue-500 text-white',
      'bg-red-500 text-white',
      'bg-green-500 text-white',
      'bg-yellow-400 text-black',
      'bg-pink-500 text-white',
      'bg-purple-600 text-white',
    ]
    
    const nuovoColore = colori[Math.floor(Math.random() * colori.length)]

    this.coloreClasse.set(nuovoColore)

  }




}
