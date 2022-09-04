import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalParameters } from '../helpers/global-parameters/global-parameters';
import { AuthService } from '../services/auth.service';
import { Login } from '../shared/login/Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: Login = {};
  rememberMe = false;
  isDevelopment = true;
  devUrl: string;
  uatUrl: string;
  localhostUrl: string;
  prodUrl: string;
  chosenEnvironment = 'localhost';


  logoURL = GlobalParameters.imageUrl + 'cropped-logotri_ret-2.png';


  constructor(private authService: AuthService) {
    this.isDevelopment = true;
    this.devUrl = environment.baseUrlDEV;
    this.uatUrl = environment.baseUrlUAT;
    this.prodUrl = environment.baseUrlPRD;
    this.localhostUrl = environment.baseUrlLocalHost;
  }


  ngOnInit() {
  }

  login() {

    switch (this.chosenEnvironment) {
      case 'localhost':
        GlobalParameters.baseUrl = environment.baseUrlLocalHost;
        GlobalParameters.apiUrl = environment.apiUrlLocalHost;
        GlobalParameters.mediaUrl = environment.mediaUrlLocalHost;
        GlobalParameters.imageUrl = environment.imageUrlLocalHost;
        GlobalParameters.spinnerUrl = environment.spinnerUrlLocalHost;
        GlobalParameters.errorApiURL = environment.errorApiUrlLocalHost;
        break;

      case 'dev':
        GlobalParameters.baseUrl = environment.baseUrlDEV;
        GlobalParameters.apiUrl = environment.apiUrlDEV;
        GlobalParameters.mediaUrl = environment.mediaUrlDEV;
        GlobalParameters.imageUrl = environment.imageUrlDEV;
        GlobalParameters.spinnerUrl = environment.spinnerUrlDEV;
        GlobalParameters.errorApiURL = environment.errorApiUrlDEV;
        break;


      case 'uat':
        GlobalParameters.baseUrl = environment.baseUrlUAT;
        GlobalParameters.apiUrl = environment.apiUrlUAT;
        GlobalParameters.mediaUrl = environment.mediaUrlUAT;
        GlobalParameters.imageUrl = environment.imageUrlUAT;
        GlobalParameters.spinnerUrl = environment.spinnerUrlUAT;
        GlobalParameters.errorApiURL = environment.errorApiUrlUAT;
        break;


      case 'prod':
        GlobalParameters.baseUrl = environment.baseUrlPRD;
        GlobalParameters.apiUrl = environment.apiUrlPRD;
        GlobalParameters.mediaUrl = environment.mediaUrlPRD;
        GlobalParameters.imageUrl = environment.imageUrlPRD;
        GlobalParameters.spinnerUrl = environment.spinnerUrlPRD;
        GlobalParameters.errorApiURL = environment.errorApiUrlPRD;
        break;

    }

    console.log('Login - rememberMe', this.rememberMe);
    console.log('Login - chosenEnvironment', this.chosenEnvironment);
    console.log('Login - GlobalParameters.baseUrl', GlobalParameters.baseUrl);

    this.authService.login(this.model, this.rememberMe);
  }


}
