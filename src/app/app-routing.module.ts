import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserViewComponent } from './user-view/user-view.component';
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from "./guards/redirect.guard";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, canActivate: [RedirectGuard],
  },
  {
    path: 'register',
    component: RegisterComponent, canActivate: [RedirectGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent, canActivate : [AuthGuard],
  },
  {
    path: 'user-view',
    component: UserViewComponent,  canActivate : [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
