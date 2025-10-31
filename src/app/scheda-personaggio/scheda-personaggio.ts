import { CommonModule, } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
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
  classe = signal<string>('');
  razza = signal('');
  livello = signal(1);
  descrizione = signal('');
  avatarImg = signal<string>('elfo.jpg');

  private avatarMap:  Record<string, string> = {
    'Paladino' : 'paladino.jpg',
    'Ladro' : 'ladro.jpg',
    'Guerriero': 'guerriero.jpg',
    'Barbaro': 'barbaro.jpg',
    'Mago' : 'mago.jpg'


   
  } 

   constructor(){
      effect(()=>{
        const c = this.classe();
        this.avatarImg.set(this.avatarMap[c] ?? 'elfo.jpg') 
      })
    }




  avatarUrl(){

    const avatar = [
    'elfo.jpg',
    'guerriero.jpg',
    'mago.jpg',
    'ladro.jpg',
    'orco.jpg'
  ];

    
    const cambiaAvatar = avatar[Math.floor(Math.random() * avatar.length)];
    
      
    this.avatarImg.set(cambiaAvatar)
    
    
  }



  cardVisibile = signal(false);

  inviaScheda(){
    this.cardVisibile.set(true)    
    this.avatarUrl()
  }

  

  reset(){
    this.nome.set('');
    this.classe.set('');
    this.razza.set('');
    this.livello.set(1);
    this.descrizione.set('');

    this.cardVisibile.set(false)
  }

}
