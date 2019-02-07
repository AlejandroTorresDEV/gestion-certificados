import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ShowCertificatesComponent } from './show-certificates/show-certificates.component';
import { ShowMessagesComponent } from './show-messages/show-messages.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CertificatesViewComponent,
    NavbarComponent,
    ProfileComponent,
    CreateCertificateComponent,
    SpinnerComponent,
    ShowCertificatesComponent,
    ShowMessagesComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
