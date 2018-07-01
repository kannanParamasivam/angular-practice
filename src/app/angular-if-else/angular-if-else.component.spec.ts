import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIfElseComponent } from './angular-if-else.component';

describe('AngularIfElseComponent', () => {
  let component: AngularIfElseComponent;
  let fixture: ComponentFixture<AngularIfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularIfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
