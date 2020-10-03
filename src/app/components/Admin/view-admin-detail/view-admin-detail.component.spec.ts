import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminDetailComponent } from './view-admin-detail.component';

describe('ViewAdminDetailComponent', () => {
  let component: ViewAdminDetailComponent;
  let fixture: ComponentFixture<ViewAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
