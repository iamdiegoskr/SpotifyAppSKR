import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages'
})
export class NoimagesPipe implements PipeTransform {

  transform(images: any[]): string {

    // if(images.length>0){
    //   return images[0].url;
    // }else{
    //   return 'assets/img/noimage.png';
    // }

    return images.length == 0 ? 'assets/img/noimage.png' : images[0].url;

  }

}
