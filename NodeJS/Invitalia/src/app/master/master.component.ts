import { Component } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  nomeCliente : string = "";
  anniCliente : number = 0;
  nomeFornitore : string = "";
  anniFornitore : number = 0;
}
