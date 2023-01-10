import { Component, Input } from '@angular/core';
import { IProdotto } from '../Interface/IProdotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  @Input() prodotto:IProdotto = {
    desc: "",
    costo: 0,
    numero: 0
  }
}
