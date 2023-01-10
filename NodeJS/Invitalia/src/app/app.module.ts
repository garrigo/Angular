import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//routing
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
//httpclient
import { HttpClientModule } from '@angular/common/http';

//importa la componente forms, consente il binding two-way
import { AppComponent } from './app.component';
//importa customizzati
import { IConversion } from 'shared/convert';
import { ICalcoloIva } from 'shared/iva';
import { ISaldo } from 'shared/saldo';
import { Component2Component } from './component2/component2.component';
import { FiglioComponent } from './figlio/figlio.component';
import { PadreComponent } from './padre/padre.component';
import { ListafattureComponent } from './listafatture/listafatture.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { MicroComponent } from './micro.component';
import { MasterComponent } from './master/master.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FornitoriComponent } from './fornitori/fornitori.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { ServiziComponent } from './servizi/servizi.component';



@NgModule({
  // imports nostri
  declarations: [
    AppComponent,
    IConversion,
    ICalcoloIva,
    ISaldo,
    Component2Component,
    FiglioComponent,
    PadreComponent,
    ListafattureComponent,
    DettaglioComponent,
    ProdottoComponent,
    MicroComponent,
    MasterComponent,
    ClientiComponent,
    FornitoriComponent,
    MagazzinoComponent,
    ServiziComponent
  ],
  // imports nativi
  imports: [
    //Moduli
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' }) // installazione delle regole di routing
  
  ],
  providers: [],
  // Indica il componente con cui deve partire
  bootstrap: [AppComponent]
})
export class AppModule { }
