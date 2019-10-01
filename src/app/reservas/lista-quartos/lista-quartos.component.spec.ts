import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQuartosComponent } from './lista-quartos.component';

describe('ListaQuartosComponent', () => {
  let component: ListaQuartosComponent;
  let fixture: ComponentFixture<ListaQuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaQuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
