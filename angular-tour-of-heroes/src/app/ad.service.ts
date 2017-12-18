import { Injectable }           from '@angular/core';
import {FilmactorComponent}     from './filmactor/filmactor.component' ; 
import {ActorComponent}         from './actor/actor.component' ; 

 
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(FilmactorComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(ActorComponent, {name: 'Dr IQ', bio: 'Smart as they come'}) 
    ];
  }
}