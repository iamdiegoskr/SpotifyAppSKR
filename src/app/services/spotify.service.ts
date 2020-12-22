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
      'Authorization': 'Bearer BQB8WfPiwVq53S-frFTD86wXMdNfcTawmnLZt8SlI0p9NQoXYQ5oXcK7-KWX3KbYJiffn7X877HafM5wck0'
    })

    return this.http.get(baseURL,{headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=21')
        .pipe(map(data => data['albums'].items));
  
  }

  geUniqueArtist(artistID){
      return this.getQuery(`artists/${artistID}`);
  }  


  getArtists(nameArtist:string){
    return this.getQuery(`search?q=${nameArtist}&type=artist`)
      .pipe(map(data=>{
          return data['artists'].items;
      }));
      
      /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCMvWRJGfPaO5mGfPPeNIiu_vZjTnZ9osT-8AtiUXBfoVD0NHZR1V2FgjeIisTyI_DoVI5NKyHiZvi8fYg'
      })
      return this.http.get(`https://api.spotify.com/v1/search?q=${nameArtist}&type=artist`,{headers})
          .pipe(map(data=>{
      return data['artists'].items;
      }))*/
  }

}


