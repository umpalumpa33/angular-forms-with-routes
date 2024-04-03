import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPirveliComponent } from './register-pirveli.component';

describe('RegisterPirveliComponent', () => {
  let component: RegisterPirveliComponent;
  let fixture: ComponentFixture<RegisterPirveliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPirveliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPirveliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
