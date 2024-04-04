import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../formDataService';

@Component({
  selector: 'app-register-meore',
  templateUrl: './register-meore.component.html',
  styleUrls: ['./register-meore.component.scss']
})
export class RegisterMeoreComponent implements OnInit {

  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      address: ['', Validators.required],
      country: ['',Validators.required,]
    });
  }

  constructor(private fb: FormBuilder, private router: Router, private formDataService: FormDataService) { }
  @Output() formData = new EventEmitter<any>();
  @Output() registerEvent = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<any>();
  countryCodes = [
    { code: '+1'},
    { code: '+44'},
    { code: '+995'},
    { code: '+123'}
  ];
  placeholder: string = this.countryCodes[0].code;
  selectedCountryCode!: string;
  onCountryCodeChange(event: any) {
    const countryCode = event.code;
    this.placeholder = countryCode.substring(0, 6);
  }

  

  getFormControl(name: string) {
    return this.myForm.get(name);
  }

  submitForm() {
    const formData = this.myForm.value;
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.registerEvent.emit(this.myForm.value);
      this.router.navigate(['/register-mesame'])
      this.formSubmitted.emit(this.myForm.value);
      this.formDataService.addFormData(formData);
    } else {
      console.log('Form is invalid');
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
