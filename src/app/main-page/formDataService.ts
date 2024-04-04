import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  allFormData: any[] = [];

  addFormData(formData: any) {
    this.allFormData.push(formData);
  }

  getAllFormData() {
    return this.allFormData;
  }
}