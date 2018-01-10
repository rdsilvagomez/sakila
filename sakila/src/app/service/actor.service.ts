import { Injectable } from '@angular/core';
import {listadoActor} from '../classes/actor';
import {Actor} from '../classes/actor';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ActorService {

  constructor(private http: HttpClient) { }
	getActor(page:any): Observable<listadoActor>
		{ 
			return this.http.get('../../web/index.php/actor/list?page='+page)
			               .map(response => response  as listadoActor);

/*test servicio*/
		}
}
