import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarcompraComponent } from './completarcompra.component';

describe('CompletarcompraComponent', () => {
  let component: CompletarcompraComponent;
  let fixture: ComponentFixture<CompletarcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletarcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
