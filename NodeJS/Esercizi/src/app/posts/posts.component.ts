import { Component } from '@angular/core';
import { IUser, IPost } from '../Interface/IModel';
import { ModelService } from '../models.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ModelService] // array di servizi, se serve su tutto l'applicativo si mette in app.module.ts
})
export class PostsComponent {
  constructor(private _IModel : ModelService){}
  ngOnInit(): void {
    this._IModel.getUsers().subscribe(
      (utenti) => this.utenti = utenti
    );

    /* Con caricamento di tutti i post in fase di costruzione del componente */
    /* Meno performance a caricamento pagina ma migliori durante applicazione filtro */

    // this._IModel.getPosts().subscribe(
    //   (posts) => this.posts = posts
    // );
  }

  selected : number = 0;
  utenti : Array<IUser> = [];
  posts : Array<IPost> = [];
  neoPost : IPost = {
    id: 4200,
    userId: 5,
    title: "Titolo mio",
    body: "Body mio"
  }
  /* Variabile di appoggio dei post filtrati per userId */
  // filteredPosts : Array<IPost> = [];

  loadPosts(){
    this.posts = [];
    this._IModel.getPostsByID(this.selected).subscribe(
      (posts) => this.posts = posts
    );

    /* Filtra tutti i post per userId */
    // this.filteredPosts = this.posts.filter(
    //   (post) => post.userId == this.selected
    // );
  }

  addPost(){
    this._IModel.postPost(this.neoPost).subscribe(
      (post) => console.log(post)
    );
  }

}
