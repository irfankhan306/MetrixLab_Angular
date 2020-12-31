import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EditEmployeeCardComponent } from './edit-employee-card/edit-employee-card.component';
import { EmpServiceService } from './emp-service.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EditEmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
