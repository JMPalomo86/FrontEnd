import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsProductoComponent } from './forms-producto.component';

describe('FormsProductoComponent', () => {
  let component: FormsProductoComponent;
  let fixture: ComponentFixture<FormsProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsProductoComponent]
    });
    fixture = TestBed.createComponent(FormsProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
