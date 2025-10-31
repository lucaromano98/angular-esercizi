import { Component, signal } from '@angular/core';
import { Saluto } from './saluto/saluto';
import { Contatore } from './contatore/contatore';
import { CambiaColore } from './cambia-colore/cambia-colore';
import { SchedaPersonaggio } from './scheda-personaggio/scheda-personaggio';


@Component({
  selector: 'app-root',
  imports: [Saluto, Contatore, CambiaColore, SchedaPersonaggio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('corso-angular');
}
