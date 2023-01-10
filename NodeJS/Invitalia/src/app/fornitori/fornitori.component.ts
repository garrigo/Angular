import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.component.html',
  styleUrls: ['./fornitori.component.css']
})
export class FornitoriComponent implements OnInit, OnDestroy {

  constructor (private route:ActivatedRoute){

  }

  nomeFornitore : string = "";
  anniFornitore : number = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (datiRicevuti) => {
        this.nomeFornitore = datiRicevuti["nome"];
        this.anniFornitore = datiRicevuti["anni"];
      }
    );
  }
  ngOnDestroy(): void {
  }
}
