///import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';
import { ActorService } from '../actor.service';
import {Actor} from '../actor'; 
import {listadoActor} from '../actor'; 
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

listado :listadoActor ; 
  constructor(private servicio: ActorService) { }
  @Output () onSelectedActor= new EventEmitter <number> (); 
  ngOnInit() {
  	this.servicio.getActor().subscribe(list=> this.listado= list); 

  }
  loadRelatedList (actor_id){
   this.onSelectedActor.emit(actor_id); 

  }

}
