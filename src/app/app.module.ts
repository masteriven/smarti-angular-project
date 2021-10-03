import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogListComponent } from './componenets/dog-list/dog-list.component';
import { CreateDogFormComponent } from './componenets/create-dog-form/create-dog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FiltersSearchComponent } from './componenets/filters-search/filters-search.component';
import { SearchBarPipe } from './search-bar.pipe';

const routes: Routes = [
  {path: '', component: DogListComponent},
  {path:'createDog', component: CreateDogFormComponent},
  {path:'', component:DogListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    CreateDogFormComponent,
    FiltersSearchComponent,
    SearchBarPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    [RouterModule.forRoot(routes),BrowserAnimationsModule]
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
