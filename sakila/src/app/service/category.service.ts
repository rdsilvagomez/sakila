import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {Category} from '../classes/category'
@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategories(): Observable<Category[]>
 {
   return  this.http.get("../../web/index.php/category").map(response=>response['data'] as Category[]); 
  }

}
