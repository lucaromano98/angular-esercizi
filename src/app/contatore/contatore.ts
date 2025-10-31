import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contatore',
  standalone: true,
  templateUrl: './contatore.html',
  styleUrl: './contatore.scss',
})
export class Contatore {
  conteggio = signal(0)

  incrementa(){
    this.conteggio.set(this.conteggio() + 1)
  }


  resetta(){
    this.conteggio.set(0)
  }

  decresci(){
    this.conteggio.set(this.conteggio() - 1)
  }

}
