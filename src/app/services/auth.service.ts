import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalParameters } from 'src/app/helpers/global-parameters/global-parameters';
import { Login } from '../shared/login/Login';
import { NotificationService } from '../shared/notification/notification.service';
import { UserPreferencesService } from './UserPreferencesService';
import { StorageService } from './storage.service';
import { Utils } from '../shared/utils';
import { environment } from 'src/environments/environment';
import { AuthenticatedUserResponse } from '../model/authenticatedUserResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


baseUrl = GlobalParameters.authUrl;
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

    console.log('AuthService: Login', this.baseUrl);
    this.useLocalStorage = useLocalStorage;
    return this.http.post<AuthenticatedUserResponse>(this.baseUrl, model)
        .subscribe({
            next: (response) => {
                
                if (typeof response != 'undefined' && response != null) {
                    this.saveToken(response.userToken);
                    if (this.getDecodedToken() ) {
                        this.notificationService.success('Login successfully.');
                        this.userPreferencesService.loadUserPreferences(this.getUserId());
                    } else {
                        this.notificationService.error('Login failed: it returned an invalid token ');
                    }
                }
    
        },
        error:(err: HttpErrorResponse )=> 
        {
            console.error(err);
            this.notificationService.error(err.message);
        }
      });
}


register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
}

logout(): void {
    this.storage.remove('token');
    sessionStorage.removeItem('token');
    this.decodedToken = null;
    this.token = undefined;
}


  loggedIn(): boolean {
    return this.getDecodedToken() != null;
  }

  loggedinUsername(): string {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return this.decodedToken.unique_name;
    }
    return '??';
  }

  getUserId(): number {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return this.decodedToken.nameid;
    }
    return 0;
  }

  saveToken(token: string)  {
    this.decodedToken = this.jwtHelper.decodeToken(token);
    if (this.decodedToken != null && typeof this.decodedToken != 'undefined' ) {
      if (this.useLocalStorage) {
          this.storage.set('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }
        this.token = token;
    } else {
      this.token = null;
      this.decodedToken = null;
    }
  }


  private getDecodedToken(): any {

    if (Utils.IsStringEmpty(this.token)) {
      if (this.useLocalStorage) {
        this.token = this.storage.get('token');
      } else {
        this.token = sessionStorage.getItem('token');
      }
    }

    if (!Utils.IsStringEmpty( this.decodedToken)) {
      if ( this.token!= null  && !this.jwtHelper.isTokenExpired(this.token) ) {  
        return this.decodedToken ;
      }

    }
    
    if ( this.token!= null  && !this.jwtHelper.isTokenExpired(this.token) ) {
      this.decodedToken = this.jwtHelper.decodeToken(this.token);
      return this.decodedToken;
    }
    return null;
  
  }

}
