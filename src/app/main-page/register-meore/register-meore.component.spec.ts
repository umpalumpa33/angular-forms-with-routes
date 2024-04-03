import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMeoreComponent } from './register-meore.component';

describe('RegisterMeoreComponent', () => {
  let component: RegisterMeoreComponent;
  let fixture: ComponentFixture<RegisterMeoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMeoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMeoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
