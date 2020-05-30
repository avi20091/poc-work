import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'custom-lib-custom-mat-grid',
  template: `
  <table style="width:100%" mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <ng-container [matColumnDef]="tableData" *ngFor="let tableData of objectKeys(columnHeader)">
    <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>
    <td mat-cell *matCellDef="let element"> {{element[tableData] }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="objectKeys(columnHeader)"></tr>
  <tr mat-row *matRowDef="let row; columns: objectKeys(columnHeader);"></tr>
</table>
  `
})
export class CustomMatGridComponent implements OnInit {
  @Input() tableData;
  @Input() columnHeader;
  objectKeys = Object.keys;

  dataSource;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);    
  }
}
