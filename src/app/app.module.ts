import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {initializer} from './app-initializer';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {KeycloakConfigService} from './keycloak/keycloak-config.service';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService, KeycloakConfigService]
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
