import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateInbuiltElementComponent } from './ng-template-inbuilt-element.component';

describe('NgTemplateInbuiltElementComponent', () => {
  let component: NgTemplateInbuiltElementComponent;
  let fixture: ComponentFixture<NgTemplateInbuiltElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateInbuiltElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateInbuiltElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
