import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassBuiltinDirectiveComponent } from './ng-class-builtin-directive.component';

describe('NgClassBuiltinDirectiveComponent', () => {
  let component: NgClassBuiltinDirectiveComponent;
  let fixture: ComponentFixture<NgClassBuiltinDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassBuiltinDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassBuiltinDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
