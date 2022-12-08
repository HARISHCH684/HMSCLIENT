import { Component, OnInit } from '@angular/core';
import { patient } from 'src/patient';
import { patientFile } from 'src/patientfile';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patfile:patientFile[]=[];
  pat:patient;

  constructor(public service:ProjserviceService) { }

  ngOnInit(): void {
    this.pat=new patient();
  }

  getPatients():void{
    this.service.getPatientdetails().subscribe(
      data=>{
        this.patfile=data;
      }
    )
  }

}
