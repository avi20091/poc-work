import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';

@Component({  
  selector: 'app-employee-custom',
  templateUrl: './employee.component.html'
})

export class CustomEmployeeComponent {
  constructor() { }
  columnHeader1 = { 'empID': 'Employee ID', 'empName': 'Employee Name', 'bankName': 'Bank Name', 'branch': 'Branch' };

  tableData1: any[] = [
    { empID: 1, empName: 'Pramod Sharma', bankName: "HDFC Bank", branch: 'Mumbai' },
    { empID: 2, empName: 'Satish Diwan', bankName: "ICICI Bank", branch: 'Pune' },
    { empID: 3, empName: 'Sachin Pandey', bankName: "IDFC Bank", branch: 'Hyderabad' },
    { empID: 4, empName: 'Nitin Naik', bankName: "Yes Bank", branch: 'Kolhapur' },
    { empID: 5, empName: 'Amrut Joshi', bankName: "Axis Bank", branch: 'Delhi' },
    { empID: 6, empName: 'Ajit Patil', bankName: "City Bank", branch: 'Surat' },
  ];
}
