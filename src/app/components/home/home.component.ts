import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  loading : boolean;

  newReleases : any[] = [];

  constructor(private spotifyservice: SpotifyService) { 

    this.loading = true;

    this.spotifyservice.getNewReleases()
      .subscribe((data:any)=>{
        this.newReleases = data;
        this.loading = false;
      })
  }

}
