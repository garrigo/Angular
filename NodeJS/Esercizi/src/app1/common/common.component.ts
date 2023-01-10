import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {

  @Input() ruolo : string = "";
  @Input() colore : string = "";
  @Input() maxPrelievo : number = 0;

  prelievo : number = 0;
  deposito : number = 0;
  @Output() evento = new EventEmitter<number>;
  preleva() : void {
    this.evento.emit(this.prelievo >= 0 && (this.prelievo <= this.maxPrelievo || this.ruolo == "CEO")? this.prelievo : 0);
  }
  deposita() : void {
    this.evento.emit(this.deposito >= 0 ? this.deposito * (-1) : 0);
  }
}
