import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Servicio de spotify esta listo");
  }
  
  getQuery(query:string){
    
    const baseURL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1IyRJ5PsYxTKiEEUHTKJoDGyOb2kZOtiGIcQIh8G7kMVBimszptHqz0EU9aI2FGqIhqv-GW52M-FfMPE'
    })

    return this.http.get(baseURL,{headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=21')
        .pipe(map(data => data['albums'].items));
  
  }


  getArtist(nameArtist:string){
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCMvWRJGfPaO5mGfPPeNIiu_vZjTnZ9osT-8AtiUXBfoVD0NHZR1V2FgjeIisTyI_DoVI5NKyHiZvi8fYg'
    // })
    // return this.http.get(`https://api.spotify.com/v1/search?q=${nameArtist}&type=artist`,{headers})
    //   .pipe(map(data=>{
    //     return data['artists'].items;
    //   }))

    return this.getQuery(`search?q=${nameArtist}&type=artist`)
      .pipe(map(data=>{
          return data['artists'].items;
      }))

  }

}


