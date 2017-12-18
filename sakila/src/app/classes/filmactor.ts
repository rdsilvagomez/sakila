import {Actor} from './actor'; 
import {Film} from './film'; 
import {metadata} from './metadata'; 

export class filmactor
	{
		actor:Actor; 
		film :Film; 
	}
export class listadoFilmActor{
		_meta: metadata; 
 		 data: filmactor[]; 
}