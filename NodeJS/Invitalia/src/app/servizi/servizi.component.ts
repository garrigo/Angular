import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interface/IUser';
import { UserService } from '../users.service';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css'],
  providers: [UserService] // array di servizi, se serve su tutto l'applicativo si mette in app.module.ts
})
export class ServiziComponent implements OnInit {
  constructor(private _IUser : UserService){}
  ngOnInit(): void {
    this._IUser.getUsers().subscribe(
      (utenti) => this.utenti = utenti
    );
  }
  utenti : Array<IUser> = [];
}
