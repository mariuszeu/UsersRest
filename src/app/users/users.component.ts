import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserEditComponent } from './user-edit/user-edit.component';

export interface UserData {
  id: number;
  username: string;
  email?: string;
  role?: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: UserData = {
    id: 1,
    username: 'test',
    email: ''
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  editModal() {
    const userEditDialog = this.dialog.open(UserEditComponent, { data: this.userData });
    userEditDialog.afterOpened().subscribe((res) => {
      // Trigger After Dialog Opened
      console.log('After Opened', { res });
    });
    userEditDialog.beforeClosed().subscribe((res) => {
      // Trigger Before Dialog Closed
      console.log('Before Closed', { res });
    });
    userEditDialog.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed
      console.log('After Closed', { res });
    });
  }

}
