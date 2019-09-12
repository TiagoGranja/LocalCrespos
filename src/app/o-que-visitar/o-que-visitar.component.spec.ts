import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueVisitarComponent } from './o-que-visitar.component';

describe('OQueVisitarComponent', () => {
  let component: OQueVisitarComponent;
  let fixture: ComponentFixture<OQueVisitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OQueVisitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OQueVisitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
