import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CertificateService } from "../services/certificate.service";
import { Certificates } from '../interfaces/Certificates';

@Component({
  selector: 'app-update-certificate',
  templateUrl: './update-certificate.component.html',
  styleUrls: ['./update-certificate.component.css']
})
export class UpdateCertificateComponent implements OnInit {

  //Variables para manejar el fichero del certificado
  file;
  fileByte;
  rutaFichero;

  registerForm: FormGroup;
  submitted = false;
  accion : Number;

  certificate: any;
  idCertificado;
  loanding: boolean;
  base64String : string;
  alias: string;
  password: string;
  id_orga: string;
  nombre_cliente: string;
  contacto: string;
  lista_integracion: string;
  repositorio: string;
  observaciones: string;
  estado : number;
  subido : boolean;

  //Varaibles para el manejo de errores
  SuccesSave : boolean;
  ServerError :boolean;
  BadAtributtes :boolean;

  mensaggeSuccesSave = "Certificado actualizado correctamente";
  mensaggeErrorServer = "Error de conexión con el servidor";
  mensaggeBadAtributtes = "El certificado no es valido";

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private certificateService: CertificateService) {
    this.idCertificado = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.accion = 0;
    this.loanding = false;
    this.SuccesSave = false;
    this.ServerError = false;
    this.BadAtributtes = false;
    this.getCertificate();
    this.generateCertificateFormModel();
  }

  //Capturamos el evento del input file para recoger los datos del usuario.
  changeListener($event): void {
    this.readThis($event.target);
  }

  //Método para leer los datos del certificado
  readThis(inputValue: any): void {
    this.accion = 1;
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    //Obtenemos el nombre del fichero.
    this.rutaFichero = file.name;

    myReader.readAsDataURL(file);

    //Obtenemos el certificado como bytes.
    myReader.onloadend = (e) => {
      this.file = myReader.result;
      this.fileByte = this.file.split(',')[1];
    };
  }

  getCertificate() {
    this.loanding = true;
    this.certificateService.getCertificate(this.idCertificado).then(res => {
      this.certificate = res;
      this.alias = this.certificate.alias
      this.fileByte = this.certificate.base64String;
      this.rutaFichero = this.certificate.nombreFichero;
      this.password = this.certificate.password;
      this.id_orga = this.certificate.id_orga;
      this.nombre_cliente = this.certificate.nombre_cliente;
      this.contacto = this.certificate.contacto_renovacion;
      this.lista_integracion = this.certificate.integration_list;
      this.repositorio = this.certificate.repositorio;
      this.observaciones = this.certificate.observaciones;
      this.estado = this.certificate.estado;
      this.subido = this.certificate.subido;
      this.loanding = false;
    }).catch(error => {
        this.loanding = false;
        console.log(error);
      });;
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

  generateCertificateFormModel() {
    this.registerForm = this.formBuilder.group({
      alias: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      id_orga: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      nombre_cliente: ['', Validators.required],
      contacto_renovacion: ['', Validators.required],
      repositorio: ['', Validators.required],
      observaciones: ['', Validators.required],
      integration_list: ['', Validators.required]
    });
  }

  updateCertificate() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const certificatePut: Certificates = 
    {  
      id: this.certificate.id,
      alias: this.registerForm.value.alias,
      entidad_emisiora: this.certificate.entidad_emisiora,
      numero_de_serie: this.certificate.entidad_emisiora,
      subject: this.certificate.subject,
      caducidad: this.certificate.caducidad,
      password: this.registerForm.value.password,
      id_orga: this.registerForm.value.id_orga,
      nombre_cliente: this.registerForm.value.nombre_cliente,
      contacto_renovacion: this.registerForm.value.contacto_renovacion,
      repositorio: this.registerForm.value.repositorio,
      observaciones: this.registerForm.value.observaciones,
      integration_list: this.registerForm.value.integration_list,
      base64String: this.fileByte,
      eliminado : this.certificate.eliminado,
      nombreFichero : this.rutaFichero,
      estado : 0,
      subido : this.subido
    }
    this.loanding = true;
    this.certificateService.activateCertificate(certificatePut,this.accion).then(
      (res: { statusCode: number}) => {

      if(res.statusCode === 201){
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
