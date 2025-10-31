import { CommonModule, } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-scheda-personaggio',
  imports: [CommonModule, FormsModule,],
  templateUrl: './scheda-personaggio.html',
  styleUrl: './scheda-personaggio.scss',
})
export class SchedaPersonaggio {

  nome = signal('');
  classe = signal('');
  razza = signal('');
  livello = signal(1);
  descrizione = signal('');

  cardVisibile = signal(false);

  inviaScheda(){
    this.cardVisibile.set(true)
  }

reset(){
  this.nome = signal('');
  this.classe = signal('');
  this.razza = signal('');
  this.livello = signal(1);
  this.descrizione = signal('');

  this.cardVisibile.set(false)
}

}
