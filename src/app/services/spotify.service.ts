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
      
      'Authorization': 'Bearer BQDK_Z1MPVd7-UXOqXhYXGuoYBuvbpC2LZm2rl2zpCVUwc5TS-246jbSo0ty8gJZoYIXDuHIyIvhKu4pdvA'

    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
      
  }

}


