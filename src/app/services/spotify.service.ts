import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
      
      'Authorization': 'Bearer BQBz7hhQjNUVoSyfxn0N13bp_hGe2jp8wmtUttHUNuirH23iMW3C7_9JCaYGFgcdCj337_YwUCfU4j1GUj0'

    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21',{headers});
      
  }

}


