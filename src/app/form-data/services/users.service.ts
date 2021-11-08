import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor() { }
    adduser(customer: any) {
        let customers = [];
        if (localStorage.getItem('customers')) {
            customers = JSON.parse(localStorage.getItem('customers')!);
            customers = [customer, ...customers];
        } else {
            customers = [customer];
        }
        localStorage.setItem('customers', JSON.stringify(customers))
    }
}