import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//httpclient
import { HttpClientModule } from '@angular/common/http';

//importa la componente forms, consente il binding two-way
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  // imports nostri
  declarations: [
    AppComponent,
    PostsComponent
  ],
  // imports nativi
  imports: [
    //Moduli
    BrowserModule,
    FormsModule,
    HttpClientModule,  
  ],
  providers: [],
  // Indica il componente con cui deve partire
  bootstrap: [AppComponent]
})
export class AppModule { }
