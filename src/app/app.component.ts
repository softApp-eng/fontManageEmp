import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmpServiceService } from './service/emp-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'frontMangeEmp';
    public employee!: Employee[];
    constructor(private empSrv: EmpServiceService) {
    }
    ngOnInit() {
        this.getEmployees()
    }

 

    public getEmployees(): void {
        this.empSrv.getEmp().subscribe((data: Employee[]) => {
            this.employee = data;
            console.log(this.employee)
            
        },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }
}
