import { Component } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public usersList: User[] = [ 
    {id:1, name:"Jan", phone: 123, email: "lol@lol"},
    {id: 2, name: "Janina", phone: 234, email: "rotfl@lol"},
    {id: 3, name: "Hieronim", phone: 345, email: "wow@lol"},  
    {id: 4, name: "Zofia", phone: 345, email: "wow@lol"},  
    {id: 5, name: "Albert", phone: 345123, email: "wow@lol"},  
    {id: 6, name: "Adam", phone: 345234, email: "wow@lol"},  
    {id: 7, name: "Hieronim", phone: 345567, email: "wow@lol"},  
    ];

    onUserDelete(id: number): void {
      this.usersList = this.usersList.filter(user => id !== user.id);
    }
}
