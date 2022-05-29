import { Component, OnInit } from '@angular/core';
import {UserDetail} from '../models'
import {MatDialog} from '@angular/material/dialog';
import { UserEditComponent } from './user-edit/user-edit.component';
import {UsersService} from "./users.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: UserDetail[] = [];
  users: UserDetail[];
  user: UserDetail[];


  constructor(private usersService: UsersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsersService().subscribe(
      (value) => {
              console.log("getUsers",value)
              this.users = value;
            }
    );
  }

  getUser(userId: number) {
    this.usersService.getUserService(userId).subscribe(
      (value) => {
        //console.log("getUser",value)
        this.user = value;
      },
      error => console.log(error),
      () => {this.openModal(this.user)}
    );
  }

  saveUserChange(changedData: Partial<UserDetail>) {
    console.log("saveUserChange",changedData);
    this.usersService.editUserService(changedData).subscribe(
      (value) => {
        console.log("getUsers",value)
        this.users = value;
      },
      error => console.log(error),
      () => {this.getUsers()}
    );
  }


  editModal(userID: number): void {//console.log("editModal userID",userID)
    this.getUser(userID);
  }

  openModal(user: UserDetail[]) {//console.log("openModal userID",user[0])


    const userEditDialog = this.dialog.open(UserEditComponent, { data: this.user[0] });
    //console.log("openModal 1",this.user[0])

    userEditDialog.afterOpened().subscribe((res) => {
      //console.log('After Opened', { res });
    });
    userEditDialog.beforeClosed().subscribe((res) => {
      console.log('Before Closed', { res });
      // console.log(res.data);
      this.saveUserChange(res.data);
    });
    userEditDialog.afterClosed().subscribe((res) => {
      //console.log('After Closed', { res });
    });
  }

}
