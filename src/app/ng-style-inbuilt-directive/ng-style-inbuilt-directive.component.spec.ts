import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleInbuiltDirectiveComponent } from './ng-style-inbuilt-directive.component';

describe('NgStyleInbuiltDirectiveComponent', () => {
  let component: NgStyleInbuiltDirectiveComponent;
  let fixture: ComponentFixture<NgStyleInbuiltDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleInbuiltDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleInbuiltDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
