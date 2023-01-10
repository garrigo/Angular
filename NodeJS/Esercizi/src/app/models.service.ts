import { Observable } from "rxjs"; // dati ricevuti in asincrono
import { Injectable } from "@angular/core"; //dependency injection
import { IUser, IPost } from "./Interface/IModel";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // modulo apertura canale http

@Injectable()
export class ModelService {
    constructor(private channel: HttpClient){}

    private usersUrl:string = "https://jsonplaceholder.typicode.com/users";
    private postsUrl:string = "https://jsonplaceholder.typicode.com/posts";


    getUsers() : Observable<Array<IUser>> {
        return this.channel.get<Array<IUser>>(this.usersUrl);
    }

    getPosts() : Observable<Array<IPost>> {
        return this.channel.get<Array<IPost>>(this.postsUrl);
    }

    getPostsByID(id : number) : Observable<Array<IPost>> {
        return this.channel.get<Array<IPost>>(this.postsUrl + "?userId="+id);
    }

    //oggetto da inviare come intestazione della chiamata
    httpOption = {
        headers: new HttpHeaders ({
            "Content-type": "application/json"
        })
    }

    postPost(post : any) : Observable<any>{

        return this.channel.post<Array<IPost>>(this.postsUrl, post, this.httpOption);
    }

}