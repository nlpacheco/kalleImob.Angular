import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GlobalParameters } from 'src/app/helpers/global-parameters/global-parameters';
import dayjs from 'dayjs'

import { UserPreferences } from '../model/user-preferences';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  baseUrl = GlobalParameters.apiUrl + 'userPreferences/CMS';

  private storageName = 'userPreferences';
  private cacheDate: dayjs.Dayjs;
  //defaultPreferences: UserPreferences;
  userPreferences: UserPreferences;
  userId = 0;
  cacheMaxAgeMinutes: number;
  useLocalStorage = true;

  
  private cacheObserver$: BehaviorSubject<boolean>;

  // private authService: AuthService;

  constructor(http: HttpClient) {
    // this.defaultPreferences = new UserPreferences();
    // this.defaultPreferences.paginationPageSize = 10;
    // this.defaultPreferences.viewCanceledObjects = false;
    // this.defaultPreferences.darkMode = false;
    // this.defaultPreferences.debugMode = false;
    this.cacheDate = dayjs('2000-01-01');
    this.cacheObserver$ = new BehaviorSubject<boolean>(false);
    this.cacheMaxAgeMinutes = 24 * 60 * 365;
    this.userPreferences = new UserPreferences();

}

get viewCanceledObjects(): boolean {
    return  this.userPreferences.viewCanceledObjects;
}


set viewCanceledObjects(value: boolean) {
    this.userPreferences.viewCanceledObjects = value;
    this.saveUserPreferences();
}

get paginationPageSize(): number {
    return this. userPreferences.paginationPageSize;
}

set paginationPageSize(value: number) {
    this.userPreferences.paginationPageSize = value;
    this.saveUserPreferences();
}


get debugMode(): boolean {
    return this.userPreferences.debugMode;
}


set debugMode(value: boolean) {
    this.userPreferences.debugMode = value;
    this.saveUserPreferences();
}


get darkMode(): boolean {
    return this.userPreferences.darkMode;
}

set darkMode(value: boolean) {
    this.userPreferences.darkMode = value;
    this.saveUserPreferences();
}

// setAuthService(authService: AuthService) {
//      this.authService = authService;
// }


// getDefaultPreferences(): UserPreferences {
//     return this.defaultPreferences;
// }


  getUserPreferenceNotifications(): Observable<boolean> {

    if (this.IsCacheAgeOld()) {
      this.updateCache();
    }
    return this.cacheObserver$;
  }


  loadUserPreferences(userId: number): Observable<boolean> {
    this.userId = userId;
    this.updateCache();
    return this.cacheObserver$;
  }


  private saveUserPreferences() {
    

    if (this.useLocalStorage) {
      localStorage.setItem(this.storageName + this.userId, JSON.stringify( this.userPreferences));
    } else {
      sessionStorage.setItem(this.storageName + this.userId, JSON.stringify( this.userPreferences));
    }
  }

  removeUserPreferencesFromCache() {
    console.log('removeUserPreferencesFromCache - userid:', this.userId);
    localStorage.removeItem(this.storageName + this.userId);
    sessionStorage.removeItem(this.storageName + this.userId);
  }


  private updateCache() {
    var userPreferencesText: string | null;
    console.log('updateCache - userid:', this.userId);


    if (this.useLocalStorage) {
      userPreferencesText = localStorage.getItem(this.storageName + this.userId);
      if (userPreferencesText == null) {
        userPreferencesText = sessionStorage.getItem(this.storageName + this.userId);
      }
    } else {
      userPreferencesText = sessionStorage.getItem(this.storageName + this.userId);
      if (userPreferencesText == null) {
        userPreferencesText = localStorage.getItem(this.storageName + this.userId);
      }
    }


    this.userPreferences = (userPreferencesText)  ? JSON.parse(userPreferencesText) : new UserPreferences();

    console.log('updateCache - userPreferences:', this.userPreferences);

    this.cacheDate = dayjs();
    this.cacheObserver$.next(true);

  }


  private IsCacheAgeOld(): boolean {
      if (this.cacheDate == null) {
        return true;
      }
      return (dayjs().diff(this.cacheDate,'minute')> this.cacheMaxAgeMinutes)
      // return (moment().diff(this.cacheDate, 'minutes') > this.cacheMaxAgeMinutes);
    }

}
