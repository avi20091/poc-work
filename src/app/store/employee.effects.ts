import { employeeActionTypes } from './employee.actions';
import { EmployeeService } from './../service/employee.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeEffects {
  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActionTypes.createEmployee),
      concatMap((action) => this.employeeService.getInsertEmployee(action.employee))
    ),
    {dispatch: false}
  );

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActionTypes.deleteEmployee),
      concatMap((action) => this.employeeService.getDeleteEmployee(action.employeeId))
    ),
    {dispatch: false}
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActionTypes.updateEmployee),
      concatMap((action) => this.employeeService.getUpdateEmployee(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(private employeeService: EmployeeService, private actions$: Actions, private router: Router) {}
}
