import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Dog } from '../dogObject';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  dog = new Dog();
  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8001/api/dogs');
  }
  addNewDog(data:any){
    return this.httpClient.post('http://127.0.0.1:8001/api/addDog' + data,'');
  }

  deleteDog(id:any){
    return this.httpClient.delete('http://127.0.0.1:8001/api/deleteDog/' + id);
  }
}
