import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/custom-mat-grid.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomMatGridService = /** @class */ (function () {
    function CustomMatGridService() {
    }
    CustomMatGridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CustomMatGridService.ctorParameters = function () { return []; };
    /** @nocollapse */ CustomMatGridService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CustomMatGridService_Factory() { return new CustomMatGridService(); }, token: CustomMatGridService, providedIn: "root" });
    return CustomMatGridService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/custom-mat-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/custom-mat-grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomMatGridModule = /** @class */ (function () {
    function CustomMatGridModule() {
    }
    CustomMatGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CustomMatGridComponent],
                    imports: [MatTableModule, CommonModule],
                    exports: [CustomMatGridComponent]
                },] }
    ];
    return CustomMatGridModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: custom-mat-grid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CustomMatGridComponent, CustomMatGridModule, CustomMatGridService };
//# sourceMappingURL=custom-mat-grid.js.map
