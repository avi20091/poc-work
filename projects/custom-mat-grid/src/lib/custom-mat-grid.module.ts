import { NgModule } from '@angular/core';
import { CustomMatGridComponent } from './custom-mat-grid.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomMatGridComponent],
  imports: [MatTableModule, CommonModule],
  exports: [CustomMatGridComponent]
})
export class CustomMatGridModule { }
