import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding-portal.component.html',
  styleUrls: ['./onboarding-portal.component.scss']
})
export class OnboardingComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  personalEmail: string = '';
  mobileNumber: string = '';
  gender: string = '';
  employId: string = '';
  designation: string = '';
  department: string = '';
  dateOfJoining: string = '';
  contactAddress: string = '';
  genderOptions: string[] = ['Male', 'Female', 'Other'];

  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private http: HttpClient,
    private apiservice: ApiService,
  ) {}
ngOnInit(): void {
  this.getUsers();
}
getUsers(){
  this.apiservice.getUsers().subscribe({
    next: (res: any) => {
      // Display success message
     
      console.log(res);
    },
    error: (err: any) => {
      // Display error message
      this.errorMessage = err.error?.error?.message || 'An error occurred';
      this.successMessage = null; // Clear any previous success message
      console.error(err);
    }
  });
}
  onSubmit() {
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      personalEmail: this.personalEmail,
      mobileNumber: this.mobileNumber,
      gender: this.gender,
      employId: this.employId,
      designation: this.designation,
      department: this.department,
      dateOfJoining: this.dateOfJoining,
      contactAddress: this.contactAddress
    };
    this.addUser(userData)
    // this.http.post('/api/onboard', userData).subscribe(response => {
    //   console.log('User data submitted:', response);
    //   // Add any success handling logic here
    // }, error => {
    //   console.error('Error submitting user data:', error);
    //   // Add any error handling logic here
    // });
    
  }
  addUser(user:any) {
    // const newUser = {
    //   id: 1,
    //   first_name: 'John',
    //   last_name: 'Doe',
    //   personal_email: 'john.doe@example.com',
    //   mobile_number: '1234567890',
    //   gender: 'Male',
    //   employ_id: 'EMP001',
    //   designation: 'Developer',
    //   departmennt: 'IT',
    //   date_of_joining: '2024-01-01',
    //   contact_address: '1234 Main St, Anytown, USA'
    // };

    this.apiservice.addUser(user).subscribe({
      next: (res: any) => {
        // Display success message
        this.successMessage = 'User inserted successfully';
        this.errorMessage = null; // Clear any previous error message
        console.log(this.successMessage);
        this.getUsers();

      },
      error: (err: any) => {
        // Display error message
        this.errorMessage = err.error?.error?.message || 'An error occurred';
        this.successMessage = null; // Clear any previous success message
        console.error(this.errorMessage);
      }
    });
  }
}
