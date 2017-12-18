import { Component, OnInit } from '@angular/core';
import {FilmactorService} from '../service/filmactor.service'; 
import {listadoFilmActor} from '../classes/filmactor'; 
import {CategoryService} from '../service/category.service'; 
@Component({
  selector: 'app-filmactor',
  templateUrl: './filmactor.component.html',
  styleUrls: ['./filmactor.component.css']
})
export class FilmactorComponent implements OnInit {
  listado: listadoFilmActor; 
  constructor(private serv: FilmactorService/*, private catService:CategoryService*/) { }
    page:number=1; 
    actorid; 
  ngOnInit() {
		///this.loadFilms (0);
    ///this.catService.getCategories();  
  }
  loadFilms (actorid) 
  {
    this.actorid= actorid; 
    this.page= 1; 
		this.serv.getFilmByActor(this.actorid,this.page).subscribe(list=>this.listado=list); 
  }
pageChanged($event)
{
  this.page=$event; 
  this.serv.getFilmByActor(this.actorid,this.page).subscribe(list=>this.listado=list); 

}

}
