import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPagoComponent } from './envio-pago.component';

describe('EnvioPagoComponent', () => {
  let component: EnvioPagoComponent;
  let fixture: ComponentFixture<EnvioPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
