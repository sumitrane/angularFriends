import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesManageComponent } from './services-manage.component';

describe('ServicesManageComponent', () => {
  let component: ServicesManageComponent;
  let fixture: ComponentFixture<ServicesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
