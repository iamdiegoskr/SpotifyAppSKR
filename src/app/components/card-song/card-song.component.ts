import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent{

  @Input() song : any = {};

  constructor() { }

  seeAlbum(item:any){
    console.log(item)
  }

}
