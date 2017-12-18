import { Component, EventEmitter, Input, Output ,OnInit,ViewChild} from '@angular/core';
import { ActorService } from '../service/actor.service';
import {Actor} from '../classes/actor'; 
import {listadoActor} from '../classes/actor'; 
import {FilmactorComponent} from '../filmactor/filmactor.component'; 
import {CategoryService} from '../service/category.service'; 
import {Category} from '../classes/Category'; 
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
	   @ViewChild('relatedfilm') relatedfilm : FilmactorComponent ; 
     listado : listadoActor; 
      @Output () onSelectedActor = new EventEmitter<number>(); 
      page:number =1; 
      listadoCategories: Category[]; 
      constructor(private servicio:ActorService, private catService:CategoryService) 
      { 
      
      }
      ngOnInit() 
      {
        
    	   this.servicio.getActor(this.page).subscribe(list=>this.listado= list); 
      }
      pageChanged($event )
      {
         this.servicio.getActor(this.page).subscribe(list=>this.listado= list); 	
         this.catService.getCategories().subscribe(list=>this.listadoCategories= list ); 
      }
      loadRelatedList(actorid )
      { 
      	//this.onSelectedActor.emit(actorid); 
        this.relatedfilm.loadFilms(actorid); 
      }

}
