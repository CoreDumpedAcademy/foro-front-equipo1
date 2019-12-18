import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingComponent } from './emerging.component';

describe('EmergingComponent', () => {
  let component: EmergingComponent;
  let fixture: ComponentFixture<EmergingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
