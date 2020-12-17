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
      
      'Authorization': 'Bearer BQCdjYZ22Bi6A0TEzDDsAV4-J0vsXNX6mTPyXAOrBYziKXlp9g6o6oYIVSTQa_hl4aMpwNG_GgaE2527CXQ'

    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21',{headers});
      
  }

}


