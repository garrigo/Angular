import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // per ricevere dati dalla route (url)

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit, OnDestroy, OnChanges {

  nomeCliente : string = "";
  anniCliente : number = 0;

  //Per ricevere dati dalla route
  constructor(private route: ActivatedRoute){
  }
  

  ngOnInit(): void {
    this.nomeCliente = this.route.snapshot.params["nomeCliente"];
    this.anniCliente = this.route.snapshot.params["anniCliente"];
  }

  ngOnChanges(): void {
    
    this.ngOnInit();
  }

  ngOnDestroy(): void {
  }
}
