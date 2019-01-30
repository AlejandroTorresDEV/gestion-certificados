import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
<<<<<<< HEAD
import { AdminComponent } from "./admin/admin.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

=======
import { ProfileComponent } from './profile/profile.component';
>>>>>>> feature-profile
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
<<<<<<< HEAD
  },
  {
    path: 'admin',
    component: AdminComponent,
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
=======
  }
>>>>>>> feature-profile
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
