import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDogFormComponent } from './create-dog-form.component';

describe('CreateDogFormComponent', () => {
  let component: CreateDogFormComponent;
  let fixture: ComponentFixture<CreateDogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
