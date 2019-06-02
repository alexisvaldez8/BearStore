import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarproductosComponent } from './modificarproductos.component';

describe('ModificarproductosComponent', () => {
  let component: ModificarproductosComponent;
  let fixture: ComponentFixture<ModificarproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
