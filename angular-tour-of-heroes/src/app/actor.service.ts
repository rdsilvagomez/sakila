import { Injectable } from '@angular/core';
import {Actor} from './actor'; 
import {listadoActor} from './actor'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
@Injectable()
export class ActorService {

		constructor(private http: HttpClient) 
		{ 

		}

		getActor(): Observable<listadoActor>
		{

			return this.http.get('../../web/index.php/actor')
			               .map(response => response  as listadoActor);


		}


}
