import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding-portal/onboarding-portal.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path:'',component:UsersComponent},
  {
    path: "onboarding",
    component: OnboardingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
