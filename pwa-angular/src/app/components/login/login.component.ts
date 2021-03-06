import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validacion = false;
  constructor(private authenticationService: AuthenticationService) { }

    ngOnInit(): void { }


    login(){
      this.validacion = true;
      this.checkCredentials(this.validacion);
    }

    private checkCredentials(signInForm: boolean) {
      console.log("si funciona");
      const signInData = signInForm;
      this.authenticationService.authenticate(signInData)
  }

}