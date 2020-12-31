import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpServiceService } from './../emp-service.service'

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  showEmpDetails: boolean;
  isHide = false;
  isActive = true;
  addEmp: boolean;
  showEmployeesCard = true;
  mode: string;
  totalEmployee;
  employeeData;
  empData;

  constructor(private _http: HttpClient,
              private _empService: EmpServiceService) { }

  ngOnInit() {
    this._http.get('https://reqres.in/api/users?page=2').subscribe((data) => {
      this.totalEmployee = data['total'];
      this.employeeData = data['data'];
      this._empService.empData = this.employeeData;
      this.totalEmployee = this.totalEmployee;
    });
  }

  onClickEmp(emp) {
    this.isHide = true;
    this.addEmp = true;
    this.mode = 'view';
    this.empData = emp;
  }

  addEmployee() {
    this.mode = 'edit';
    this.addEmp = true;
    this.isHide = true;
  }

}
