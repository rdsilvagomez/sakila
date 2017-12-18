import { Injectable } from '@angular/core';
import {metadata} from './metadata'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {filmactor} from './filmactor'; 
import {listadoFilmActor} from './filmactor'; 


@Injectable()
export class FilmActorService {

  constructor(private http: HttpClient) { }

  getFilmByActor(actor_id:any):Observable<listadoFilmActor>
  {
      return this.http.get('../../web/index.php/filmactor/list?expand=actor,film&actor_id='+actor_id)
			               .map(response => response  as listadoFilmActor);
	}
}
