import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from './services/age.validators';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: any;
  list: Array<any> = [];
  editIndex: number | null;
  customer: any = {};
  age: any;
  errors!: boolean;

  constructor(private formBuilder: FormBuilder, private userservice: UsersService) {
    this.list = [];
    this.editIndex = null;
    this.form = this.formBuilder.group({
      name: [" ", [Validators.required]],
      age: [" ", [Validators.required, AgeValidator]],
      email: [" ", [Validators.required, Validators.email,]]
    });
  }

  ngOnInit(): void {


    console.log(this.form.controls['age']['errors']);

  }
  onSubmit() {
    if (this.editIndex) { this.list[this.editIndex - 1] = this.form.value; }
    else {
      this.list.push(this.form.value);
    }
    console.log(this.form.value);
    this.reset();
    this.customer = Object.assign(this.customer, this.form.value);
    // sessionStorage.setItem('hello',this.form.value);
    this.userservice.adduser(this.customer);
  }
  reset() {
    this.editIndex = null;
    this.form.reset();
  }

  delete(index: any) {
    this.list.splice(index, 1);
    this.form.reset();
  }

  editList(index: number, item: any) {
    this.form.patchValue(item);
    this.editIndex = index + 1;

  }

}
