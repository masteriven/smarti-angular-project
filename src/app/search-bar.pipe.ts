import { Pipe, PipeTransform } from '@angular/core';
import { Dog } from 'src/app/dogObject';

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {
  
  transform(dog:Dog[],seatchValue:string):Dog[]{
    if(!dog || !seatchValue){
      return dog;
    }else{
      return dog.filter(dog => dog.dogName.toLocaleLowerCase().includes(seatchValue.toLocaleLowerCase()));
    }
  }
}
