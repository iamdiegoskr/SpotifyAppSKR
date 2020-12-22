import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  loading : boolean;

  error:boolean;
  messageError : string;

  newReleases : any[] = [];

  constructor(private spotifyservice: SpotifyService) { 

    this.loading = true;
    this.error = false;
    this.spotifyservice.getNewReleases()
      .subscribe((data:any)=>{
        this.newReleases = data;
        this.loading = false;
      },(errorService=>{
        console.log(errorService);
        this.error=true;
        this.loading=false;
        this.messageError=errorService.error.error.message;
      }))
  }

}
