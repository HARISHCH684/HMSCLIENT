import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {

  constructor(public http:HttpClient) { }

  getPatientdetails(){
    return this.http.get<any>("http://localhost:8081/getPatient");
  
    }

    getPatientFileDetails(patientFileId:number){
      return this.http.get<any>(`http://localhost:8081/patientInfo/${patientFileId}`);
    }
}
