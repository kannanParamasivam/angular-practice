import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueForServiceComponent } from './due-for-service.component';

describe('DueForServiceComponent', () => {
  let component: DueForServiceComponent;
  let fixture: ComponentFixture<DueForServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueForServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
