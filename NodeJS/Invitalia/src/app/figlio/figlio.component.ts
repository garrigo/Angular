import { Component, Input, EventEmitter, Output} from '@angular/core';
// Per ricevere input dal componente padre, aggiungere Input
// Per dare output al padre, aggiungere EventEmitter che emette un evento, e Output

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent {

  //Da padre a figlio
  @Input() nomeRicevuto:string ="";

  //Da figlio a padre
  city : string = "";
  @Output() evento = new EventEmitter<string>;
  invia() : void {
    this.evento.emit(this.city);
  }
}
