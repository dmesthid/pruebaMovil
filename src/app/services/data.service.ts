import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../interfaces/interfaces';
import { Personas } from '../interfaces/intefas2';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 _url='http://localhost:8080/personas/listar'
 
 constructor(
   private http: HttpClient
   ) {
     console.log('servicio personas')
    }
  getMenuItem(){
    return this.http.get<Menu[]>("/assets/json/data.json")
  }
  getPersonas(){
    return this.http.get<Personas[]>("http://localhost:8080/personas/listar.json")
   /*let heades = new HttpHeaders()
   .set('Type-content', 'aplication/json')
   return this.http.get(this._url,{
     headers: heades
    });*/
  }
}
