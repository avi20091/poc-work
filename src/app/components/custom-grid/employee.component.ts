import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';

@Component({  
  selector: 'app-employee-custom',
  templateUrl: './employee.component.html'
})

export class CustomEmployeeComponent {
  constructor() { }
  columnHeader1 = { 'studentID1': 'Student ID', 'fname1': 'First Name', 'weight1': 'Weight', 'symbol1': 'Symbol' };

  tableData1: any[] = [
    { studentID1: 1, fname1: 'Hydrogen', weight1: 1.0079, symbol1: 'H' },
    { studentID1: 2, fname1: 'Helium', weight1: 4.0026, symbol1: 'He' },
    { studentID1: 3, fname1: 'Lithium', weight1: 6.941, symbol1: 'Li' },
    { studentID1: 4, fname1: 'Beryllium', weight1: 9.0122, symbol1: 'Be' },
    { studentID1: 5, fname1: 'Boron', weight1: 10.811, symbol1: 'B' },
    { studentID1: 6, fname1: 'Carbon', weight1: 12.0107, symbol1: 'C' },
    { studentID1: 7, fname1: 'Nitrogen', weight1: 14.0067, symbol1: 'N' },
    { studentID1: 8, fname1: 'Oxygen', weight1: 15.9994, symbol1: 'O' },
    { studentID1: 9, fname1: 'Fluorine', weight1: 18.9984, symbol1: 'F' },
    { studentID1: 10, fname1: 'Neon', weight1: 20.1797, symbol1: 'Ne' },
  ];
}
