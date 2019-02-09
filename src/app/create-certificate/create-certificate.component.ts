import { Component, OnInit} from '@angular/core';
import { CertificateService } from ".././services/certificate.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificates } from '../interfaces/Certificates';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  file;
  fileByte;
  rutaFichero;

  registerForm: FormGroup;
  submitted = false;
  observaciones : string;
  loanding: boolean;

  SuccesSave : boolean;
  ServerError :boolean;
  BadAtributtes :boolean;

  mensaggeSuccesSave = "Certificado guardado correctamente";
  mensaggeErrorServer = "Error de conexión con el servidor";
  mensaggeBadAtributtes = "El certificado no es valido";

  constructor(private certificateService: CertificateService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generateCertificateFormModel();
    this.SuccesSave = false;
    this.ServerError = false;
    this.BadAtributtes = false;
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    this.rutaFichero = file.name;
    
    myReader.onloadend = (e) => {
      this.file = myReader.result;
      this.fileByte = this.file.split(',')[1];
      console.log(this.fileByte)
    };
    myReader.readAsDataURL(file);
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
    const certificate: Certificates = 
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
      base64String: this.fileByte,
      eliminado : false,
      nombreFichero : this.rutaFichero
    }
    this.loanding = true;
    this.certificateService.saveCertificates(certificate)
    .then(
      (res: { statusCode: number}) => {
      if(res.statusCode == 201){
        this.SuccesSave = true;
      }

      if(res.statusCode == 400){
        this.BadAtributtes = true;
      }
      this.loanding = false;

    })
    .catch((error: { statusCode: number}) => {
      this.loanding = false;
      if(error.statusCode == 500){
        this.ServerError = true;
      }
    });;
  }
}
