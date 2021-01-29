import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesusuariosComponent } from './detallesusuarios.component';

describe('DetallesusuariosComponent', () => {
  let component: DetallesusuariosComponent;
  let fixture: ComponentFixture<DetallesusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
