import { Observable } from "rxjs"; // dati ricevuti in asincrono
import { Injectable } from "@angular/core"; //dependency injection
import { IUser } from "./Interface/IUser"; 
import { HttpClient } from "@angular/common/http"; // modulo apertura canale http

@Injectable()
export class UserService {
    constructor(private channel: HttpClient){}

    private url:string = "https://jsonplaceholder.typicode.com/users";

    getUsers() : Observable<Array<IUser>> {
        return this.channel.get<Array<IUser>>(this.url);
    }

}