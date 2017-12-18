import { Component, OnInit }   from '@angular/core';
import {filmactor 		 }      from '../filmactor'; 
import {listadoFilmActor}        from '../filmactor'; 
import { FilmActorService }    from '../film-actor.service';

@Component({
  selector: 'app-filmactor',
  templateUrl: './filmactor.component.html',
  styleUrls: ['./filmactor.component.css']
})
export class FilmactorComponent implements OnInit {
   listado :listadoFilmActor ; 
   selected_actor_id: number = 1; 

  constructor(private servicio: FilmActorService) { }

  ngOnInit() {
  
  	///this.loadFilmActor(); 
  }

 loadFilmActor()
 {  


   
   this.servicio.getFilmByActor(this.selected_actor_id).subscribe(list=> this.listado= list); 

 }
}
