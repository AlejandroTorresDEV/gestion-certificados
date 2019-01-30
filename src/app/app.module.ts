import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
=======
import { ProfileComponent } from './profile/profile.component';
>>>>>>> feature-profile

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    NavbarComponent,
    AdminComponent,
    PageNotFoundComponent,
=======
    AdminComponent,
    ProfileComponent
>>>>>>> feature-profile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
