import { Component } from '@angular/core';
// FormGroup = gestisce i dati; FormControl = grafica dei dati; Validators = validazione dei dati
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap';

  //oggetto per mappare logica e grafica del form
  contattoForm:FormGroup = new FormGroup(
    {
      nome: new FormControl('Mario', [Validators.required]), // 'Mario' è il placeholder
      cognome: new FormControl('Rossi', [Validators.required, Validators.minLength(2)]),
      anni: new FormControl(25, [Validators.min(18)])
    }
  );

  registra() : void{
    console.log(this.contattoForm.value)
  }
}
