import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLayoutComponent } from './input-layout.component';

describe('InputLayoutComponent', () => {
  let component: InputLayoutComponent;
  let fixture: ComponentFixture<InputLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
