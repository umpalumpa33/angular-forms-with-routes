import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMesameComponent } from './register-mesame.component';

describe('RegisterMesameComponent', () => {
  let component: RegisterMesameComponent;
  let fixture: ComponentFixture<RegisterMesameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMesameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMesameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
