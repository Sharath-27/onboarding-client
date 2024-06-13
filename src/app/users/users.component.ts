import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  successMessage: string | null = null;
  errorMessage: string | null = null;
  allusers: Array<any> =[]
  constructor(
    private apiservice:ApiService,
    public router: Router,
  ){


  }
  ngOnInit(): void {
   this.getUsers();
  }
  getUsers(){
    this.apiservice.getUsers().subscribe({
      next: (res: any) => {
        this.allusers = res;
        console.log(this.allusers)
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
  adduser(){
    this.router.navigate(["/onboarding"])
  }
}
