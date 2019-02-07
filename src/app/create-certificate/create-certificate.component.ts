import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProfileJiraService } from ".././services/profile-jira.service";

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  image;
  url  = "/Users/alejandrotorresruiz/Desktop/certificados/prueba.pfx";

  constructor(private profileJiraService: ProfileJiraService) { }

  ngOnInit() {
  
  }

  changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.image = myReader.result;
    let imageByte = (this.image.replace("data:application/x-pkcs12;base64,",""));
    console.log(imageByte)
    this.profileJiraService.saveCertificate(imageByte).then(res => {
      console.log(res);
    })
    .catch(error => {
        console.log(error);
    });
    };
  
  myReader.readAsDataURL(file);
 
}

}
