import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ActorComponent } from './actor/actor.component';
import { ActorService } from './actor.service';

import {AdService} from './ad.service'
import { FilmActorService } from './film-actor.service';
import { HttpClientModule }    from '@angular/common/http';
import { FilmactorComponent } from './filmactor/filmactor.component';
import { AdDirective } from './ad.directive';
import { AddComponent } from './add/add.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { HighlightDirective } from './highlight.directive';
import { TestpipePipe } from './testpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ActorComponent,
    FilmactorComponent,
    AdDirective,
    AddComponent,
    AddbannerComponent,
    HighlightDirective,
    TestpipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
    entryComponents: [ ActorComponent, FilmactorComponent ],
  providers: [ActorService,FilmActorService,AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
