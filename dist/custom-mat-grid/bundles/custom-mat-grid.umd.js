(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/table'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('custom-mat-grid', ['exports', '@angular/core', '@angular/material/table', '@angular/common'], factory) :
    (global = global || self, factory(global['custom-mat-grid'] = {}, global.ng.core, global.ng.material.table, global.ng.common));
}(this, (function (exports, core, table, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/custom-mat-grid.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomMatGridService = /** @class */ (function () {
        function CustomMatGridService() {
        }
        CustomMatGridService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CustomMatGridService.ctorParameters = function () { return []; };
        /** @nocollapse */ CustomMatGridService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CustomMatGridService_Factory() { return new CustomMatGridService(); }, token: CustomMatGridService, providedIn: "root" });
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
            this.dataSource = new table.MatTableDataSource(this.tableData);
        };
        CustomMatGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'custom-lib-custom-mat-grid',
                        template: "\n  <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <ng-container [matColumnDef]=\"tableData\" *ngFor=\"let tableData of objectKeys(columnHeader)\">\n    <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[tableData] }}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"objectKeys(columnHeader)\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: objectKeys(columnHeader);\"></tr>\n</table>\n  "
                    }] }
        ];
        CustomMatGridComponent.propDecorators = {
            tableData: [{ type: core.Input }],
            columnHeader: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [CustomMatGridComponent],
                        imports: [table.MatTableModule, common.CommonModule],
                        exports: [CustomMatGridComponent]
                    },] }
        ];
        return CustomMatGridModule;
    }());

    exports.CustomMatGridComponent = CustomMatGridComponent;
    exports.CustomMatGridModule = CustomMatGridModule;
    exports.CustomMatGridService = CustomMatGridService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=custom-mat-grid.umd.js.map
