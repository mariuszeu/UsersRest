import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserData} from "../users.component";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {


  selected = 'role2';

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData
  ) { }


}
