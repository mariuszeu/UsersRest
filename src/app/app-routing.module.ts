import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from './app-auth.guard';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: UsersComponent,
    canActivate: [AppAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
