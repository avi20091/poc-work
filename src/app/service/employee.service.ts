import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Subject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurlLocal:any = "http://localhost:3000"; 

  constructor(private http: HttpClient, private zone: NgZone) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/text',
      'Access-Control-Allow-Origin': '*',
      'responseType' : 'text/html'
    })
  }
  errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      console.log(error)
      // Get client-side error
      if (error.error.status == 0 || error.error.status == -1) {
        errorMessage = 'Unreachable : Server connection failed'
      }
      else {
        errorMessage = error.error.message;
      }
    } else {
      // Get server-side error
      if (error.status == 0 || error.status == -1) {
        errorMessage = 'Unreachable : Server connection failed'
      } else {
        if (error.error.message && error.error.message !== "") {
          errorMessage = `Error : ${error.error.message}`;
        }
        else {
          errorMessage = `Error : Bad Request`
        }
      }
    }
    //this.zone.run(() => this.toasterService.showToaster(errorMessage, 'snackbar-error'));
    return throwError(errorMessage);
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<any>(this.baseurlLocal+'/data')
    .pipe(
      map(res => res),
      catchError(error => {
        return this.errorHandle(error);
      })
    )
  }

  getDeleteEmployee(id): Observable<any> {
    return this.http.delete<any>(this.baseurlLocal + '/data/' + id)
    .pipe(
      map(res => res),
      catchError(error => {
        return this.errorHandle(error);
      })
    )
  }

  getInsertEmployee(parameters): Observable<any> {
    return this.http.post<any>(this.baseurlLocal + '/data/', parameters)
    .pipe(
      map(res => res),
      catchError(error => {
        return this.errorHandle(error);
      })
    )
  }

  getUpdateEmployee(id,parameters): Observable<any> {
    return this.http.put<any>(this.baseurlLocal + '/data/'+id,parameters, {} )
    .pipe(
      map(res => res),
      catchError(error => {
        return this.errorHandle(error);
      })
    )
  }
}
