import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  @Input() user: User;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();

   public today = new Date();
   public personFormGroup: FormGroup;

onDeleteButtonClick(): void {
  this.delete.emit(this.user.id);
}

onEditButtonClick(): void {
  this.edit.emit(this.user.id);
}

ngOnInit(): void{
  this.personFormGroup = new FormGroup({
    name: new FormControl(this.user.name),
    phoneNumber: new FormControl(this.user.phone),
    email: new FormControl(this.user.email)
  })
}

}
