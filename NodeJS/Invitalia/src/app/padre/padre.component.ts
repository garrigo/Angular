import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  //Inviata al figlio
  nome:string = "";

  //Ricevuta dal figlio
  cityReceived :string = "";
  ricevi(received : string) : void {
    this.cityReceived = received;
  }
}
