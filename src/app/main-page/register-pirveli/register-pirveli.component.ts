import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordPatternValidator } from './passwordvalidator';

@Component({
  selector: 'app-register-pirveli',
  templateUrl: './register-pirveli.component.html',
  styleUrls: ['./register-pirveli.component.scss']
})
export class RegisterPirveliComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  @Output() registerEvent = new EventEmitter<any>();

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkbox: [false, Validators.requiredTrue],
      password: [
        '', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          passwordPatternValidator()
        ]
      ]
    });
  }

  getFormControl(name: string) {
    return this.myForm.get(name);
  }
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;
  
  
  togglePasswordVisibility(): void {
    const input = this.passwordInput.nativeElement;
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  submitForm() {
    this.markFormGroupTouched(this.myForm);

    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.registerEvent.emit(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onSubmit() {
    // Mark all form controls as touched
    this.markFormGroupTouched(this.myForm);

    if (this.myForm.valid) {
      // Emit event with form values
      this.registerEvent.emit(this.myForm.value);
    }
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
