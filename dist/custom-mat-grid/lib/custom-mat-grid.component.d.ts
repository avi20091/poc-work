import { OnInit } from '@angular/core';
export declare class CustomMatGridComponent implements OnInit {
    tableData: any;
    columnHeader: any;
    objectKeys: {
        (o: object): string[];
        (o: {}): string[];
    };
    dataSource: any;
    ngOnInit(): void;
}
