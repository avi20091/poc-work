/**
 * @fileoverview added by tsickle
 * Generated from: lib/custom-mat-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export class CustomMatGridComponent {
    constructor() {
        this.objectKeys = Object.keys;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tableData);
    }
}
CustomMatGridComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
CustomMatGridComponent.propDecorators = {
    tableData: [{ type: Input }],
    columnHeader: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CustomMatGridComponent.prototype.tableData;
    /** @type {?} */
    CustomMatGridComponent.prototype.columnHeader;
    /** @type {?} */
    CustomMatGridComponent.prototype.objectKeys;
    /** @type {?} */
    CustomMatGridComponent.prototype.dataSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1hdC1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2N1c3RvbS1tYXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tbWF0LWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFpQjdELE1BQU0sT0FBTyxzQkFBc0I7SUFmbkM7UUFrQkUsZUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFPM0IsQ0FBQzs7OztJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2FBQ0Y7Ozt3QkFFRSxLQUFLOzJCQUNMLEtBQUs7Ozs7SUFETiwyQ0FBbUI7O0lBQ25CLDhDQUFzQjs7SUFDdEIsNENBQXlCOztJQUV6Qiw0Q0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1c3RvbS1saWItY3VzdG9tLW1hdC1ncmlkJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHRhYmxlIHN0eWxlPVwid2lkdGg6MTAwJVwiIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG5cbiAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cInRhYmxlRGF0YVwiICpuZ0Zvcj1cImxldCB0YWJsZURhdGEgb2Ygb2JqZWN0S2V5cyhjb2x1bW5IZWFkZXIpXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x1bW5IZWFkZXJbdGFibGVEYXRhXX19ICAgIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W3RhYmxlRGF0YV0gfX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cIm9iamVjdEtleXMoY29sdW1uSGVhZGVyKVwiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBvYmplY3RLZXlzKGNvbHVtbkhlYWRlcik7XCI+PC90cj5cbjwvdGFibGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tTWF0R3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRhYmxlRGF0YTtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyO1xuICBvYmplY3RLZXlzID0gT2JqZWN0LmtleXM7XG5cbiAgZGF0YVNvdXJjZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMudGFibGVEYXRhKTsgICAgXG4gIH1cbn1cbiJdfQ==