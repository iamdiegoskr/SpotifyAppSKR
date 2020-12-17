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
      
      'Authorization': 'Bearer BQByvIrzkLFstCyt3CyYDn9kTlErJobU8OJynxWNLXXBnCzswOjG5Pox6Ghy5nv3nUQfhh_O4oa8FFSC8S0'

    })

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .subscribe(data =>{
        console.log(data)
      })
      
  }

}


