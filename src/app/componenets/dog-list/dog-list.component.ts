import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CrudService} from '../../service/crud.service';
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogs!:any;
  seatchValue!:any;


  constructor(route:ActivatedRoute,private crudService:CrudService) {  }

  ngOnInit(): void {
       this.getDogsData();
  }

  getDogsData(){
    this.crudService.getData().subscribe(res =>{
     this.dogs = res;
     console.log(this.dogs);
     
    });
    
  }

  deleteDog(id: any){
    this.crudService.deleteDog(id).subscribe(res =>{
      this.getDogsData();
    });
  }
}
