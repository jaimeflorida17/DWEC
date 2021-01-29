import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltausuariosComponent } from './altausuarios.component';

describe('AltausuariosComponent', () => {
  let component: AltausuariosComponent;
  let fixture: ComponentFixture<AltausuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltausuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltausuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
