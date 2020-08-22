import { Component, OnInit } from '@angular/core';
import  { RequestServiceService } from 'src/app/service/request-service.service';
import { film } from 'src/app/model/film';


@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  constructor( private service : RequestServiceService) { }
  data : film[];
  ngOnInit() {
    this.getwithActors ();
    this.service.getAll().subscribe(
      response => { this.data = response ;}
    );
  }


  getwithActors (){
    this.service.getAllfilmWithActors().subscribe(
      response => { this.data = response ; }
    );
  }

}
