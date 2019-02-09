import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from "./guards/redirect.guard";
import { ProfileComponent } from './profile/profile.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { ShowCertificatesComponent } from "./show-certificates/show-certificates.component";
import { CheckRolGuard } from './guards/check-rol.guard';
import { BoardComponent } from './board/board.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, canActivate: [RedirectGuard],
  },
  {
    path: 'register',
    component: RegisterComponent, canActivate: [AuthGuard,CheckRolGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent, canActivate : [AuthGuard],
  },
  {
    path:'create-certificate',
    component: CreateCertificateComponent , canActivate : [AuthGuard,CheckRolGuard],
  },
  {
    path:'board',
    component: BoardComponent , canActivate : [AuthGuard],
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