import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairesManageComponent } from './questionnaires-manage.component';

describe('QuestionnairesManageComponent', () => {
  let component: QuestionnairesManageComponent;
  let fixture: ComponentFixture<QuestionnairesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
