import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { film } from '../model/film';
@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor( private http : HttpClient) { }

   url ="/api/allmovies";
   id  = 0 ;
     
   getAll(){
     console.log("test caLL");
     return this.http.get<film[]>('http://localhost:9988/films');
   }

   getAllfilmWithActors(){
     console.log("-------- coorect one"  );
     return this.http.get<film[]>('http://localhost:9988/films/1/actors')
   }

}
