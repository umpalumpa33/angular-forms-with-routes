import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormDataService } from './formDataService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private formDataService: FormDataService, private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/main-page') {
          this.logAllFormData();
        }
      }
    });
  }

  ngOnInit(): void {
    this.registeredUsers = this.formDataService.getAllFormData();
  }

  logAllFormData() {
    console.log(this.registeredUsers);
  }

  formDataArray: any[] = [];
  allFormData: any[] = [];
  handleFormSubmission(formData: any) {
    this.allFormData.push(formData);
  }

  consoleAllFormData() {
    console.log('All Form Data:', this.allFormData);
  }

  submitForm(formData: any) {
    this.formDataArray.push(formData);
    console.log('Form data stored:', this.formDataArray);
  }

  navigateToFirst() {
    this.router.navigate(['/register-pirveli']); 
  }

  registeredUsers: any[] = [];
  onRegister(data: any) {
    this.registeredUsers.push(data);
  }

}
