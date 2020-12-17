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
  

  getNewReleases(){
    //aqui pongo los headers que la peticion de spotify requiere.
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCGNtEsiJU0VG5GZ3drn5hsifgnwzeHfzRGViy-E8Vx1MXjOS_Jc8r4axInDcH7rNcFNhEPV2OH9HqZsls'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21',{headers})
      .pipe(map(data => data['albums'].items));
  }


  getArtist(nameArtist:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCGNtEsiJU0VG5GZ3drn5hsifgnwzeHfzRGViy-E8Vx1MXjOS_Jc8r4axInDcH7rNcFNhEPV2OH9HqZsls'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${nameArtist}&type=artist`,{headers})
      .pipe(map(data=>{
        return data['artists'].items;
      }))
  }

}


