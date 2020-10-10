import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public personFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.personFormGroup = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      age: new FormControl(),
      password:new FormControl(),      
      address: new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        postcode: new FormControl()
      }),
      email: new FormControl(),
      phoneNumber: new FormControl
    }    );

    this.personFormGroup.valueChanges
      .subscribe((data: any) => console.log(data));
  }
  public onSubmit(): void {
    console.log(this.personFormGroup.getRawValue());
  }

}
