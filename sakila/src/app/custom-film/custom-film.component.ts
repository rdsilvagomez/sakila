import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../service/category.service'; 
import {Category} from '../classes/Category'; 

@Component({
  selector: 'app-custom-film',
  templateUrl: './custom-film.component.html',
  styleUrls: ['./custom-film.component.css']
})
export class CustomFilmComponent implements OnInit {
listadoCategories: Category[]; 
  constructor(private catService: CategoryService) { }
selectedCategory:any; 
  ngOnInit() {
  		this.catService.getCategories().subscribe(list=>this.listadoCategories=list);  
  			}
	CargarFilms ($event)
	{
		alert($event); 
	}
}
