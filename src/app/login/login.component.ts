import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { GlobalParameters, serverDEVBaseURL, serverLocalHostBaseUrl, serverPRDBaseUrl, serverUATBaseUrl, suffixes } from '../helpers/global-parameters/global-parameters';
import { AuthService } from '../services/auth.service';
import { LanguageService } from '../services/language.service';
import { Login } from '../shared/login/Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //model: Login;

  domainName: string = '';
  email: string | null;
  mobile: string | null;
  countryCallingCode: string | null;
  password: string = '';
  rememberMe: boolean = false;

  isDevelopment = true;
  devUrl: string;
  uatUrl: string;
  localhostUrl: string;
  prodUrl: string;
  chosenEnvironment = 'localhost';
  Username = "USERNAME";
  Password = "PASSWORD";
  logoURL = GlobalParameters.imageUrl + 'cropped-logotri_ret-2.png';

  EMAIL_MESSAGE = '';
  MOBILE_MESSAGE = '';
  MOBILE_COUNTRY_MESSAGE = '';
  PASSWORD_MESSAGE = '';


  constructor(private authService: AuthService, 
                private translate: TranslateService) {
    this.isDevelopment = true;
    this.devUrl = serverDEVBaseURL;
    this.uatUrl = serverUATBaseUrl;
    this.prodUrl = serverPRDBaseUrl;
    this.localhostUrl = serverLocalHostBaseUrl;
    this.email = null;
    this.mobile = null;
    this.countryCallingCode = null;
    this.password = '';
    console.log('window.location.hostname: ', window.location.hostname);
    
    this.email = "norbs@uol.com.br",
    this.rememberMe  = true ,
    this.domainName= "mycompany.kalleb.com.br";
    this.countryCallingCode = '55';
    this.mobile = '11996867637';

  }


  ngOnInit() {

    var self = this;
    this.translate.get('EMAIL').subscribe((res: string) =>  self.EMAIL_MESSAGE = res);
    this.translate.get('YOUR MOBILE').subscribe((res: string) =>  self.MOBILE_MESSAGE = res);
    this.translate.get('MOBILE COUNTRY').subscribe((res: string) =>  self.MOBILE_COUNTRY_MESSAGE = res);
    this.translate.get('PASSWORD').subscribe((res: string) =>  self.PASSWORD_MESSAGE = res);


  }

  login() {

    this.updateEnvironmentSelection(this.chosenEnvironment);

    console.log('Login - rememberMe', this.rememberMe);
    console.log('Login - chosenEnvironment', this.chosenEnvironment);
    console.log('Login - GlobalParameters.baseUrl', GlobalParameters.baseUrl);

    var login: Login = {
        domainName: this.domainName,        
        email: this.email,
        mobile: this.mobile,
        countryCallingCode: this.countryCallingCode,
        password: this.password,
        rememberMe: this.rememberMe
    }
    this.authService.login(login, this.rememberMe);
  }


  private updateEnvironmentSelection(chosenEnvironment: string) {

    switch (chosenEnvironment) {
        case 'localhost':
          this.buildServerUrls (serverLocalHostBaseUrl);
          break;
  
        case 'dev':
          this.buildServerUrls (serverDEVBaseURL);
          break;
  
  
        case 'uat':
          this.buildServerUrls (serverUATBaseUrl);
          break;
  
  
        case 'prod':
          this.buildServerUrls (serverPRDBaseUrl);
          break;
  
      }
    
  }


  private  buildServerUrls(serverURL: string) {
    GlobalParameters.baseUrl    =  serverURL ;
    GlobalParameters.apiUrl     = serverURL + suffixes.apiSuffix;
    GlobalParameters.authUrl    = serverURL + suffixes.apiSuffix + suffixes.authSuffix;
    GlobalParameters.errorApiURL= serverURL + suffixes.apiSuffix + suffixes.errorSuffix;
    GlobalParameters.userUrl    = serverURL + suffixes.apiSuffix + suffixes.userSuffix;
    GlobalParameters.mediaUrl   = serverURL + suffixes.apiSuffix + suffixes.mediaSuffix;
    GlobalParameters.imageUrl   = serverURL + suffixes.imageSuffix;
    GlobalParameters.spinnerUrl = serverURL + suffixes.imageSuffix + '/Spinner.gif';
   }

}
