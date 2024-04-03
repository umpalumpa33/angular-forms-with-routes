import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-meore',
  templateUrl: './register-meore.component.html',
  styleUrls: ['./register-meore.component.scss']
})
export class RegisterMeoreComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  @Output() registerEvent = new EventEmitter<any>();
  countryCodes = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    // Add more country codes as needed
  ];
  selectedCountryCode!: string;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      address: ['', Validators.required],
      country: ['',Validators.required,]
    });
  }

  getFormControl(name: string) {
    return this.myForm.get(name);
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
