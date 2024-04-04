import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordPatternValidator } from './passwordvalidator';
import { FormDataService } from '../formDataService';


@Component({
  selector: 'app-register-pirveli',
  templateUrl: './register-pirveli.component.html',
  styleUrls: ['./register-pirveli.component.scss']
})
export class RegisterPirveliComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private formDataService: FormDataService) { }

  @Output() registerEvent = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<any>();

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
    const formData = this.myForm.value;

    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.registerEvent.emit(this.myForm.value);
      this.router.navigate(['/register-meore'])
      this.formSubmitted.emit(this.myForm.value);
      this.formDataService.addFormData(formData);
    } else {
      console.log('Form is invalid');
    }
  }


  onSubmit() {
    this.markFormGroupTouched(this.myForm);

    if (this.myForm.valid) {
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
