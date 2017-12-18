import { Component, OnInit ,AfterViewInit,
		 OnDestroy,Input, Output,ViewChild,ComponentFactoryResolver } from '@angular/core';
import {AdDirective} from '../ad.directive'; 
import {AdItem} from '../ad-item'; 
import {AdComponent} from '../ad-component'; 

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements   AfterViewInit, OnDestroy  {
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
 subscription : any; 
 interval : any ; 


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

loadComponent()
{

	 this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;


}




getAds() 
{
this.interval = setInterval(()=>{
this.loadComponent()

},3000);;


}



}
