import { Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { CrudService } from 'src/app/service/crud.service';
import { Dog } from 'src/app/dogObject';

@Component({
  selector: 'app-filters-search',
  templateUrl: './filters-search.component.html',
  styleUrls: ['./filters-search.component.css']
})


export class FiltersSearchComponent implements OnInit{

  constructor(private crudService:CrudService) { }

  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets!: Observable<string[]>;
  dog!:any[];
  seatchValue!:String;
  filterName!:any[];
  filterBy:any;
 
  ngOnInit() {
    this.crudService.getData().subscribe((dog:any) => {
      this.dog = dog;  
      this.filterName = [...this.dog];
    });

    
  }
  filter() {
    this.filterName = [...this.dog.filter(dog => dog.name.includes(this.filterBy))];
  }
}
