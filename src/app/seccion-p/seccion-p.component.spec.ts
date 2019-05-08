import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPComponent } from './seccion-p.component';

describe('SeccionPComponent', () => {
  let component: SeccionPComponent;
  let fixture: ComponentFixture<SeccionPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
