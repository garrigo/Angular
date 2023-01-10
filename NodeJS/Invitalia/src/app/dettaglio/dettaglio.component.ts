import { Component, Input } from '@angular/core';
import { IFattura } from '../Interface/IFattura';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent {
  @Input() fattura:IFattura = {
    numero: 0,
    data : "",
    city : "",
    prodotti: []
  }

  visualizza : boolean = false;

  vedi() : void {
    this.visualizza ? this.visualizza = false : this.visualizza = true;
  }
}
