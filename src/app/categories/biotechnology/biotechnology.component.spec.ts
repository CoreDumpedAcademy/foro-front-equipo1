import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotechnologyComponent } from './biotechnology.component';

describe('BiotechnologyComponent', () => {
  let component: BiotechnologyComponent;
  let fixture: ComponentFixture<BiotechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiotechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiotechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
