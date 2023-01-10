import { Component } from '@angular/core';
import { IFattura } from '../Interface/IFattura';

@Component({
  selector: 'app-listafatture',
  templateUrl: './listafatture.component.html',
  styleUrls: ['./listafatture.component.css']
})
export class ListafattureComponent {
  fatture:Array<IFattura> = [
    {
      numero: 1,
      data:"15/02/2022",
      city:"Milano",
      prodotti: [
        {
          desc: "Computer",
          costo: 1500,
          numero: 2
        },
        {
          desc: "Stampante",
          costo: 300,
          numero: 3
        }
      ]
    },
    {
      numero: 2,
      data:"17/05/2022",
      city:"Roma",
      prodotti: [
        {
          desc: "Tastiera",
          costo: 100,
          numero: 2
        },
        {
          desc: "Mouse",
          costo: 60,
          numero: 3
        }
      ]
    },
  ]

  minimo:number = 0;

  filtrati : Array<IFattura> = this.fatture;

  saldo(fattura: IFattura) : number {
    let somma = 0;
    for (let prod of fattura.prodotti){
      somma += prod.costo;
    }
    return somma;
  }

  filtra(): void{
    this.filtrati = []
    this.filtrati = this.fatture.filter(
      (item) => this.saldo(item) >= this.minimo
    )
  }

}
