import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserDetail, UserLogin} from '../../models'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  fromData = <UserDetail>{};

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public userData: UserDetail
  ) { }

  ngOnInit() {
    this.fromData.id = this.userData.id;
    this.fromData.username = this.userData.username;
    this.fromData.email = this.userData.email;
    this.fromData.roles = this.userData.roles.toString();
  }

  closeAndSave() {
    this.dialogRef.close({ event: 'close', data: this.fromData });
  }
}
