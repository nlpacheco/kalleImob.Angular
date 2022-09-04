import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalParameters } from 'src/app/helpers/global-parameters/global-parameters';
import { Login } from '../shared/login/Login';
import { NotificationService } from '../shared/notification/notification.service';
import { UserPreferencesService } from './UserPreferencesService';
import { StorageService } from './storage.service';
import { Utils } from '../shared/utils';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


baseUrl = GlobalParameters.apiUrl +  'auth/';
jwtHelper = new JwtHelperService();
decodedToken: any;
token?: string | null;
useLocalStorage: boolean = true;

constructor(private http: HttpClient,
            private notificationService: NotificationService,
            private storage: StorageService,
            private userPreferencesService: UserPreferencesService) 
{ }


login(model: Login, useLocalStorage: boolean) {
    this.baseUrl = GlobalParameters.apiUrl +  'auth/';
    console.log('AuthService: Login', this.baseUrl + 'companyUserLogin');
    this.useLocalStorage = useLocalStorage;
    return this.http.post(this.baseUrl + 'companyUserLogin', model)
        .subscribe({
            next: (response) => {
                const user: any = response;
                if (user) {
                    this.saveToken(user.token);
                    if (this.getDecodeToken() ) {
                        this.notificationService.success('Login successfully.');
                        this.userPreferencesService.loadUserPreferences(this.getUserId());
                    } else {
                        this.notificationService.error('Login failed: it returned an invalid token ');
                    }
                }
    
        },
        error:err => 
        {
            console.error(err);
            this.notificationService.error(err);
        }
      });
}


register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
}

logout() {
    this.storage.remove('token');
    sessionStorage.removeItem('token');
    this.decodedToken = null;
    this.token = undefined;
}


  loggedIn() {
    return this.getDecodeToken() != null;
  }

  loggedinUsername() {
    const decodedToken = this.getDecodeToken();
    if (decodedToken) {
      return this.decodedToken.unique_name;
    }
    return 'UNKNOWN';
  }

  getUserId(): number {
    const decodedToken = this.getDecodeToken();
    if (decodedToken) {
      return this.decodedToken.nameid;
    }
    return 0;
  }

  saveToken(token: string)  {
      if (this.useLocalStorage) {
        this.storage.set('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }
      this.token = token;
      this.decodedToken = undefined;
  }

  getDecodeToken(): any {

    if (this.useLocalStorage == null) {
      this.useLocalStorage = (this.storage.get('token') != null);
    }

    if (!Utils.IsStringEmpty( this.decodedToken)) {
    return this.decodedToken ;
    }


    if (Utils.IsStringEmpty(this.token)) {
      if (this.useLocalStorage) {
        this.token = this.storage.get('token');
      } else {
        this.token = sessionStorage.getItem('token');
      }
    }

    if ( this.token!= null  && !this.jwtHelper.isTokenExpired(this.token) ) {
    //   if (!this.decodedToken) {
    //     this.decodedToken = this.jwtHelper.decodeToken(this.token);
    //   }
      this.decodedToken = this.jwtHelper.decodeToken(this.token);
      return this.decodedToken;
    }
    return null;
  }


}
