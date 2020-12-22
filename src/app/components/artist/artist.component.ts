import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent{

  artist:any={}

  loading:boolean=true;

  constructor(private activateRoute:ActivatedRoute,
              private spotiService:SpotifyService) { 
  
    this.activateRoute.params.subscribe(params => {
      this.getArtist(params['id']);
    })

  }


  getArtist(id:string){

    this.spotiService.geUniqueArtist(id)
    .subscribe(artist=>{
      this.artist = artist;
      console.log(this.artist);
      this.loading=false;
    })

  }

  
}
