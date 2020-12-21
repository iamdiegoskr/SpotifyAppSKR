import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent{

  constructor(private activateRoute:ActivatedRoute) { 
  
      this.activateRoute.params.subscribe(params => {
        console.log(params)
        console.log(params.id);
        console.log(params['id']);
      })

  }

  
}
