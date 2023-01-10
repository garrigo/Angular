import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercizi';

  saldo : number = 50000;

  //Ricevuta dal figlio
  preleva(prelievo : number) : void {
    if (this.saldo >= prelievo)
      this.saldo -= prelievo;
    else if (prelievo > 0)
      alert("Saldo non sufficiente");
  }

}
