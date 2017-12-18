import {AfterViewInit, ViewChild,  Component,OnInit } from '@angular/core';
import { FilmactorComponent } from './filmactor/filmactor.component';
import {AdService} from './ad.service'; 
import {AdItem} from './ad-item'; 
import {HighlightDirective} from './directive/highlight.directive'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   color: string;
 @ViewChild('relatedFilms') relatedFilms: FilmactorComponent; 
  ads: AdItem[]; 
  
  constructor (private adService: AdService){}

  title = 'app';
  onSelectedActorParent(actor_id:number)
  {
  	this.relatedFilms.selected_actor_id = actor_id; 
	  this.relatedFilms.loadFilmActor();
  	 
  }
   ngOnInit()
   {
    this.ads= this.adService.getAds();

   }

}
