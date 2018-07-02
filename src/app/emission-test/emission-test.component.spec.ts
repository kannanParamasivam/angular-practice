import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionTestComponent } from './emission-test.component';

describe('EmissionTestComponent', () => {
  let component: EmissionTestComponent;
  let fixture: ComponentFixture<EmissionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
