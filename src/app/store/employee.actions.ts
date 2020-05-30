import { Employee } from './../model/employee.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const createEmployee = createAction(
  '[Create Employee Component] Create Employee',
  props<{employee: Employee}>()
);

export const deleteEmployee = createAction(
  '[Employee List Operations] Delete Employee',
  props<{employeeId: number}>()
);

export const updateEmployee = createAction(
  '[Employee List Operations] Update Employee',
  props<{update: Update<Employee>}>()
);

export const employeeActionTypes = {
  createEmployee,
  deleteEmployee,
  updateEmployee
};


