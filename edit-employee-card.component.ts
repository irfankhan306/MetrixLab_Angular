import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-edit-employee-card',
  templateUrl: './edit-employee-card.component.html',
  styleUrls: ['./edit-employee-card.component.scss']
})
export class EditEmployeeCardComponent implements OnInit {

  @Input() isEditEmp: boolean;
  @Input() mode: string; // edit, view

  fName = '';
  lName = '';
  email = '';
  imgUrl = '';
  @Input() empData;

  constructor(private _empService: EmpServiceService, private _http: HttpClient) { }

  ngOnInit(): void {

  }

  addEmployee(fName, lName, email) {
    const reqBody = {
      first_name: fName,
      last_name: lName,
      email: email,
    };
    const url = 'https://reqres.in/api/users';
    this._http.post(url, reqBody).subscribe((response) => {
      console.log(response);
    });
  }

  remove(empData) {
    const url = 'https://reqres.in/api/users/' + empData.id;
    this._http.delete(url);
  }

  update(data) {
    this.mode = 'edit';
    this.fName = data.first_name;
    this.lName = data.last_name;
    this.email = data.email;
    this.imgUrl = data.avatar;
  }

}
