import { Component, OnInit} from '@angular/core';
import { ProfileJiraService } from ".././services/profile-jira.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificates } from '../interfaces/Certificates';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  file;
  url = "/Users/alejandrotorresruiz/Desktop/certificados/prueba.pfx";
  registerForm: FormGroup;
  submitted = false;
  observaciones : string = "hola";

  constructor(private profileJiraService: ProfileJiraService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generateCertificateFormModel();
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

   /* myReader.onloadend = (e) => {
      this.file = myReader.result;
      let fileByte = this.file.split(',')[1];
      //let fileByte = (this.file.replace("data:application/x-pkcs12;base64,",""));
      console.log(fileByte[1])
      this.profileJiraService.saveCertificate(fileByte).then(res => {
        console.log(res);
      })
        .catch(error => {
          console.log(error);
        });
    };
    myReader.readAsDataURL(file);*/
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

  generateCertificateFormModel() {
    this.registerForm = this.formBuilder.group({
      fileCertificate: ['', Validators.required],
      alias: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      id_orga: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      contacto_renovacion: ['', Validators.required],
      repositorio: ['', Validators.required],
      observaciones: ['', Validators.required],
      integration_list: ['', Validators.required]
    });
  }

  saveCertificate(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const saveCertificate: Certificates = 
    {  
      id: undefined,
      alias: this.registerForm.value.alias,
      password: this.registerForm.value.password,
      id_orga: this.registerForm.value.id_orga,
      nombre_cliente: this.registerForm.value.nombre_cliente,
      contacto_renovacion: this.registerForm.value.contacto_renovacion,
      repositorio: this.registerForm.value.repositorio,
      observaciones: this.registerForm.value.observaciones,
      integration_list: this.registerForm.value.integration_list,
      base64String: this.registerForm.value.base64String,
      eliminado : false
    }
  }
}
