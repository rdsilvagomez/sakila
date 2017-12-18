import {Actor} from './actor'; 
import {Film} from './film'; 
import {metadata} from './metadata'; 

export class filmactor {
actor: Actor; 
film : Film ; 
 actor_id : number; 
 film_id :  number; 
}

export class listadoFilmActor
{
_meta: metadata; 
 data: filmactor[]; 

}