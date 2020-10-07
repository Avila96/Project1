import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTopicsComponent } from './list-of-topics.component';

describe('ListOfTopicsComponent', () => {
  let component: ListOfTopicsComponent;
  let fixture: ComponentFixture<ListOfTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
