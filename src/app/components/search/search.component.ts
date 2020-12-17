import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[]=[];

  constructor(private serviceSpotify:SpotifyService) { }

  ngOnInit(): void {
  }

  search(name:string){
    this.serviceSpotify.getArtist(name)
      .subscribe((data:any)=>{
        this.artists=data;
      })
  }  

}
