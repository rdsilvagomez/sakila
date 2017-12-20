import { NgModule }           from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import {RouterModule,Routes } from '@angular/router'; 
import {ActorComponent}        from './actor/actor.component'; 
import {FilmactorComponent}        from './filmactor/filmactor.component'; 
import {CustomFilmComponent} from './custom-film/custom-film.component'; 
const routes : Routes= [
		{path : 'actor' , component:ActorComponent },
		{path : '' , component:ActorComponent },
		{path : 'film' , component:FilmactorComponent },
		{path : 'film2', component: CustomFilmComponent }
					   ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports :[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
