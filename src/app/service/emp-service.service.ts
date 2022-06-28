import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  private apiUrl = environment.apiBaseUrl; 
  constructor(private http: HttpClient) { }



  public getEmp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + '/employee/all');
  }

  public addEmp(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + '/employee/add', employee);
  }
  public updateEmp(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + '/employee/update', employee);
  }
  public deleteEmp(employeeId: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/employee/delete/' + employeeId);
  }
}
