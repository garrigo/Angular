import { Component } from '@angular/core';
import { IComputer } from './Interface/IComputer';

@Component({
  // Binding nell'html index
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Crea logica componente
export class AppComponent {
  //valori bindati con l'html
  show : boolean = false;
  base : number = 0;
  altezza : number = 0;
  figura : number = 1;
  title : string = 'Invitalia';
  calcolaArea() : number {
    return this.base*this.altezza/this.figura
  }
  cities : string[] = ["Venezia", "Milano", "Firenze", "Roma", "Palermo"];
  chosenCity : string = "";

  negozio : Array<IComputer> = [
    {
      nome : "i9",
      monitor : "19\"",
      ram :32,
      costo : 1600
    },
    {
      nome : "i7",
      monitor : "19\"",
      ram :16,
      costo : 1000
    },
    {
      nome : "i5",
      monitor : "19\"",
      ram :8,
      costo : 400
    }
    
  ];

  nome : string = "";
  monitor : string = "";
  ram : number = 0;
  costo : number = 0;

  aggiungiComputer() : void {
    let nuovo : IComputer = {
      nome : this.nome,
      monitor : this.monitor,
      ram :this.ram,
      costo : this.costo  
    }
    this.negozio.push(nuovo);
    alert();
  }
}
