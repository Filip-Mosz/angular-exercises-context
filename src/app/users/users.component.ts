import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  @Input() user: User;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  // onDelete(): void{
  //   this.deleteUser.emit(this.user.id);
  // }

  constructor() { }

  ngOnInit(): void {
  }

  public usersList: User[] = [ 
    {id:1, name:"Jan", phone: 123, email: "lol@lol"},
    {id: 2, name: "Janina", phone: 234, email: "rotfl@lol"},
    {id: 3, name: "Hieronim", phone: 345, email: "wow@lol"}  
    ];

    onUserDelete(id: number): void {
      this.usersList = this.usersList.filter(user => user.id !== id);
    }
}



