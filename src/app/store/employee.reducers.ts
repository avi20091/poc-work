import { Employee } from './../model/employee.model';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { employeeActionTypes } from './employee.actions';

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState = adapter.getInitialState({
  employeeLoaded: false
});

export const employeeReducer = createReducer(
  initialState,
  
  on(employeeActionTypes.createEmployee, (state, action) => {
    return adapter.addOne(action.employee, state);
  }),

  on(employeeActionTypes.deleteEmployee, (state, action) => {
    return adapter.removeOne(action.employeeId, state);
  }),

  on(employeeActionTypes.updateEmployee, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);
