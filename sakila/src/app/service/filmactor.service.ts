import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {filmactor} from '../classes/filmactor'; 
import {listadoFilmActor} from '../classes/filmactor'; 

@Injectable()
export class FilmactorService {

  constructor(private http: HttpClient) { }
  getFilmByActor (actor_id:any,page:any)
  {
	return this.http.get('../../web/index.php/filmactor/list?expand=actor,film&actor_id='+actor_id+'&page='+page)
			               .map(response => response  as listadoFilmActor);


  }

}
