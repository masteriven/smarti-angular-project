import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Dog} from '../../dogObject';
import {CrudService} from '../../service/crud.service';

@Component({
  selector: 'app-create-dog-form',
  templateUrl: './create-dog-form.component.html',
  styleUrls: ['./create-dog-form.component.css']
})
export class CreateDogFormComponent implements OnInit {

  dog = new Dog();
  dogForm!: FormGroup;

  constructor(private crudService:CrudService , private router: Router, ) { }

  ngOnInit(): void {

    this.dogForm = new FormGroup({
      dogNames: new FormControl('',[
          Validators.required,
      ]),
      dogOwnerNames: new FormControl('',[
        Validators.required,
      ]),
      dogOwnerPhones: new FormControl('',[
        Validators.required,
      ]),
      dogColors: new FormControl('',[
        Validators.required,
      ]),
      dogAges: new FormControl('',[
        Validators.required,
      ]),
      dogKinds: new FormControl('',[
        Validators.required,
      ])
  
    });
  
  }

  get dogNames() { 
    return this.dogForm.get('dogNames') as FormControl; 
  }

  get dogOwnerNames() { 
    return this.dogForm.get('dogOwnerNames') as FormControl; 
  }

  get dogOwnerPhones() { 
    return this.dogForm.get('dogOwnerPhones') as FormControl; 
  }

  get dogColors() { 
    return this.dogForm.get('dogColors') as FormControl; 
  }

  get dogAges() { 
    return this.dogForm.get('dogAges') as FormControl; 
  }

  get dogKinds() { 
    return this.dogForm.get('dogKinds') as FormControl; 
  }

  insertData(){
    this.dog.dogName = this.dogForm.get('dogNames')!.value;
    this.dog.dogOwnerName = this.dogForm.get('dogOwnerNames')!.value;
    this.dog.dogOwnerPhone = this.dogForm.get('dogOwnerPhones')!.value;
    this.dog.dogColor = this.dogForm.get('dogColors')!.value;
    this.dog.dogAge = this.dogForm.get('dogAges')!.value;
    this.dog.dogkind = this.dogForm.get('dogKinds')!.value;

    let data  = '?name='+this.dog.dogName+'&ownerName='+this.dog.dogOwnerName+'&ownerPhone='+  this.dog.dogOwnerPhone + '&color= '+ this.dog.dogColor + '&age='+this.dog.dogAge + '&kind='+this.dog.dogkind;
   this.crudService.addNewDog(data).subscribe(res =>{
   });
   this.router.navigate(['/']);
  }

}
