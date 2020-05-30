import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { ToasterService } from 'src/app/service/toaster.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { createEmployee, updateEmployee } from './../../store/employee.actions';
import { Employee } from 'src/app/model/employee.model';
import { Update } from '@ngrx/entity';


export interface DialogData {
  title: any;
  elem: any;
}

@Component({
  selector: 'app-insert-dialog',
  templateUrl: './insert-dialog.component.html',
  styleUrls: ['./insert-dialog.component.scss']
})
export class InsertDialogComponent implements OnInit {
  no: any;
  name: any;
  surname: any;
  dept: any;
  joindate: Date;
  title: any;
  elem: any;
  public isUpdate = false;
  public isSubmit = true;
  value: any;
  isAdded: boolean = false;
  result: any;
  dataSource: any;
  showSpinner: boolean = true;

  insertForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dept: new FormControl('', [Validators.required, Validators.minLength(3)]),
    joindate: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<InsertDialogComponent>, public datepipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public empservice: EmployeeService,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.title = this.data.title;
    if (this.title == "Update") {
      this.isUpdate = true;
      this.isSubmit = false;
      this.elem = this.data.elem;
      if(this.elem){
        this.insertForm.get('name').setValue(this.elem.name);
        this.insertForm.get('surname').setValue(this.elem.surname);
        this.insertForm.get('dept').setValue(this.elem.dept);
        this.insertForm.get('joindate').setValue(this.elem.joindate);
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onInsertSubmit() {
    const employee: Employee = {
      id: 0,
      name: this.insertForm.controls['name'].value,
      surname: this.insertForm.controls['surname'].value,
      dept: this.insertForm.controls['dept'].value,
      joindate: this.insertForm.controls['joindate'].value
    }
    this.store.dispatch(createEmployee({ employee }));
    this.getEmployeeDetails();
  }

  onUpdateSubmit() {
    const update: Update<Employee> = {
      id: this.elem.id,
      changes: {
        name: this.insertForm.controls['name'].value,
        surname: this.insertForm.controls['surname'].value,
        dept: this.insertForm.controls['dept'].value,
        joindate: this.insertForm.controls['joindate'].value
      }
    }
    this.store.dispatch(updateEmployee({ update }));
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this.empservice.getEmployee().subscribe(res => {
      this.showSpinner = false;
      this.result = res;
      this.dataSource = new MatTableDataSource<Element>(this.result);
    });
  }
}

