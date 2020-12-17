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
      'Authorization': 'Bearer BQDFeKbhptF5XvuRrpP_3Dbi07GSfTyi1yqwKOIbl1TNUUR5V-UrHQ4GolScTON-kHhrczwn_hRMpI9fOd0'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21',{headers});
  }


  getArtist(nameArtist:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDFeKbhptF5XvuRrpP_3Dbi07GSfTyi1yqwKOIbl1TNUUR5V-UrHQ4GolScTON-kHhrczwn_hRMpI9fOd0'
    })
    // return this.http.get(`https://api.spotify.com/v1/search?q=${nameArtist}&type=artist&limit=15`,{headers});
    return this.http.get(`https://api.spotify.com/v1/search?q=${nameArtist}&type=artist`,{headers});
  }

}


