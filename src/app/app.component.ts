import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

    public onOpenModel(employee: Employee, mode: string): void {
        const container = document.getElementById("main-container");
        const button = document.createElement("button");
        button.type = "button";
        button.style.display = "none";
        button.setAttribute("data-toggle", "modal");
        if (mode === "add") {
            button.setAttribute("data-target", "#addEmp");
        }
        if (mode === "edit") {
            button.setAttribute("data-target", "#editEmp");
        }
        if (mode === "delete") {
            button.setAttribute("data-target", "#deleteEmp");
        }

        container?.appendChild(button);
        button.click();
    }


    public addNewEmployee(data: NgForm): void {

        this.empSrv.addEmp(data.value).subscribe(
            (response: Employee) => {
                console.log(response);
                document.getElementById("add-employee-form")?.click();
                this.getEmployees()
            }, (error: HttpErrorResponse) => {
                alert(error.error.message)
            })
    }
}
