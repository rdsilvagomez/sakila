import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }         from './app.component';
import { ActorComponent }       from './actor/actor.component';
import { HttpClientModule }     from '@angular/common/http';

import {ActorService}           from './service/actor.service';
import {FilmactorService}           from './service/filmactor.service';
import {CategoryService}         from './service/category.service'; 
import { FilmactorComponent } from './filmactor/filmactor.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomFilmComponent } from './custom-film/custom-film.component'; 
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    FilmactorComponent,
    CustomFilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,FormsModule 
  ],
  providers: [ActorService,FilmactorService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
