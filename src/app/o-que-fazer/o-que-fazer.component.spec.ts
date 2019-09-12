import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueFazerComponent } from './o-que-fazer.component';

describe('OQueFazerComponent', () => {
  let component: OQueFazerComponent;
  let fixture: ComponentFixture<OQueFazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OQueFazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OQueFazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
