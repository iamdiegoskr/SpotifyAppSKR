import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.css']
})
export class CardArtistComponent {

  @Input() artist : any = {};

  constructor(private router:Router) { }

  seeArtist(artist:any){
    this.router.navigate(['/artist',artist.id]);
  }

}
