import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafattureComponent } from './listafatture.component';

describe('ListafattureComponent', () => {
  let component: ListafattureComponent;
  let fixture: ComponentFixture<ListafattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListafattureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListafattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
