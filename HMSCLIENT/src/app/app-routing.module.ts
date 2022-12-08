import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientfiledetailsComponent } from './patient/patientfiledetails.component';

const routes: Routes = [
  {
    path:'patient',
    component: PatientComponent
  },
  {
    path:'patientfiledetails/:id',
    component:PatientfiledetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
