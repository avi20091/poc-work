/**
 * @fileoverview added by tsickle
 * Generated from: lib/custom-mat-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
var CustomMatGridComponent = /** @class */ (function () {
    function CustomMatGridComponent() {
        this.objectKeys = Object.keys;
    }
    /**
     * @return {?}
     */
    CustomMatGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource = new MatTableDataSource(this.tableData);
    };
    CustomMatGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'custom-lib-custom-mat-grid',
                    template: "\n  <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <ng-container [matColumnDef]=\"tableData\" *ngFor=\"let tableData of objectKeys(columnHeader)\">\n    <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[tableData] }}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"objectKeys(columnHeader)\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: objectKeys(columnHeader);\"></tr>\n</table>\n  "
                }] }
    ];
    CustomMatGridComponent.propDecorators = {
        tableData: [{ type: Input }],
        columnHeader: [{ type: Input }]
    };
    return CustomMatGridComponent;
}());
export { CustomMatGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1hdC1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2N1c3RvbS1tYXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tbWF0LWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0Q7SUFBQTtRQWtCRSxlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQU8zQixDQUFDOzs7O0lBSEMseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSxtaUJBV1Q7aUJBQ0Y7Ozs0QkFFRSxLQUFLOytCQUNMLEtBQUs7O0lBUVIsNkJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQVZZLHNCQUFzQjs7O0lBQ2pDLDJDQUFtQjs7SUFDbkIsOENBQXNCOztJQUN0Qiw0Q0FBeUI7O0lBRXpCLDRDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VzdG9tLWxpYi1jdXN0b20tbWF0LWdyaWQnLFxuICB0ZW1wbGF0ZTogYFxuICA8dGFibGUgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cblxuICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwidGFibGVEYXRhXCIgKm5nRm9yPVwibGV0IHRhYmxlRGF0YSBvZiBvYmplY3RLZXlzKGNvbHVtbkhlYWRlcilcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbHVtbkhlYWRlclt0YWJsZURhdGFdfX0gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnRbdGFibGVEYXRhXSB9fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwib2JqZWN0S2V5cyhjb2x1bW5IZWFkZXIpXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IG9iamVjdEtleXMoY29sdW1uSGVhZGVyKTtcIj48L3RyPlxuPC90YWJsZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21NYXRHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGFibGVEYXRhO1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXI7XG4gIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cztcblxuICBkYXRhU291cmNlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy50YWJsZURhdGEpOyAgICBcbiAgfVxufVxuIl19