import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient, HttpResponse } from '@angular/common/http';

import { EmployeeService } from './employee.service';

import { Employee } from './../model/employee.model';
describe('EmployeeService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let empService: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    empService = TestBed.get(EmployeeService);
  });
  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });


  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });

  describe('#getAllEmployees', () => {
    let expectedEmps: Employee[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedEmps = [
        {
          "name": "Avinash",
          "surname": "Chougule",
          "dept": "IT",
          "joindate": "2020-05-11T18:30:00.000Z",
          "id": 1
        },
        {
          "name": "Test",
          "surname": "surname",
          "dept": "ADMIN",
          "joindate": "2020-05-19T18:30:00.000Z",
          "id": 2
        },
      ] as Employee[];
    });

    //Test case 1
    it('should return expected employees by calling once', () => {
      empService.getEmployee().subscribe(
        emps => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
        fail
      );

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data');
      expect(req.request.method).toEqual('GET');

      req.flush(expectedEmps); //Return expectedEmps
    });

    //Test case 2
    it('should be OK returning no employee', () => {
      empService.getEmployee().subscribe(
        emps => expect(emps.length).toEqual(0, 'should have empty employee array'),
        fail
      );

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data');
      req.flush([]); //Return empty data
    });

    //Test case 3
    it('should turn 404 error into an empty employee result', () => {
      let response: any;
      let errResponse: any;
      empService.getEmployee().subscribe(res => response = res, err => errResponse = err);

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data');

      const msg = 'Error : Bad Request';
      req.flush(msg, { status: 404, statusText: 'Not Found' }); //Return error
      expect(errResponse).toBe(msg);
    });

    //Test case 4
    it('should return expected employees when called multiple times', () => {
      empService.getEmployee().subscribe();
      empService.getEmployee().subscribe(
        emps => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
        fail
      );

      const requests = httpTestingController.match(empService.baseurlLocal + '/data');
      expect(requests.length).toEqual(2, 'calls to getAllEmployees()');

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(expectedEmps); //Return expectedEmps in second call
    });
  });
  describe('#deleteEmployee', () => {
    let expectedEmps: Employee[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedEmps = [
        {
          "name": "Avinash",
          "surname": "Chougule",
          "dept": "IT",
          "joindate": "2020-05-11T18:30:00.000Z",
          "id": 1
        }
      ] as Employee[];
    });
    it('should return id on succesfull deletion of record', () => {
      empService.getDeleteEmployee(1).subscribe(
        res => expect(res).toBe(1),
        fail
      );

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data/'+1);
      expect(req.request.method).toBe('DELETE');

      req.flush(1);
    });
    
    it('should turn 404 error into an empty employee result', () => {
      let response: any;
      let errResponse: any;
      empService.getDeleteEmployee(1).subscribe(res => response = res, err => errResponse = err);

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data/'+1);

      const msg = 'Error : Bad Request';
      req.flush(msg, { status: 404, statusText: 'Not Found' }); //Return error
      expect(errResponse).toBe(msg);
    });

  });

  describe('~insertEmployee Data', () => {
    let expectedEmps: Employee[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedEmps = [
        {
          "name": "ABC",
          "surname": "XYZ",
          "dept": "IT",
          "joindate": "2020-05-11T18:30:00.000Z",
          "id": 3
        }
      ] as Employee[];
    });
    it('should insert new record', () => {
      empService.getInsertEmployee(expectedEmps[0]).subscribe(
        res => expect(res).toBe(expectedEmps[0]),
        fail
      );

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data/');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(expectedEmps[0]);

      const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: expectedEmps[0] });
      req.event(expectedResponse);
    });
    it('should turn 404 error into an empty employee result', () => {
      let response: any;
      let errResponse: any;
      empService.getInsertEmployee(expectedEmps[0]).subscribe(res => response = res, err => errResponse = err);

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data/');

      const msg = 'Error : Bad Request';
      req.flush(msg, { status: 404, statusText: 'Not Found' }); //Return error
      expect(errResponse).toBe(msg);
    });
  });
  describe('#UpdateEmployee Data', () => {
    let expectedEmps: Employee[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedEmps = [
        {
          "name": "ABC",
          "surname": "XYZ",
          "dept": "IT",
          "joindate": "2020-05-11T18:30:00.000Z",
          "id": 3
        }
      ] as Employee[];
    });
    it('should update record', () => {
      empService.getUpdateEmployee(3, expectedEmps[0]).subscribe(
        res => expect(res).toBe(expectedEmps[0]),
        fail
      );

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data/'+3);
      expect(req.request.method).toBe('PUT');
     // expect(req.request.body).toEqual(expectedEmps[0]);
     req.flush(expectedEmps[0]);
    });

    it('should turn 404 error into an empty employee result', () => {
      let response: any;
      let errResponse: any;
      empService.getUpdateEmployee(3, expectedEmps[0]).subscribe(res => response = res, err => errResponse = err);

      const req = httpTestingController.expectOne(empService.baseurlLocal + '/data/'+3);

      const msg = 'Error : Bad Request';
      req.flush(msg, { status: 404, statusText: 'Not Found' }); //Return error
      expect(errResponse).toBe(msg);
    });
  });
});
