import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForBuiltinDirectiveComponent } from './ng-for-builtin-directive.component';

describe('NgForBuiltinDirectiveComponent', () => {
  let component: NgForBuiltinDirectiveComponent;
  let fixture: ComponentFixture<NgForBuiltinDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForBuiltinDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForBuiltinDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
