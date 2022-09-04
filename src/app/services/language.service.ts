import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { GenericHttpServiceWithCache } from "../helpers/generic-http-service/generic-http-service-with-cache";
import { Language } from "../model/language";
import { AuthService } from "./auth.service";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
})
  
export class LanguageService extends GenericHttpServiceWithCache<
                                                                    Language,
                                                                    Language,
                                                                    Language,
                                                                    number> {
  
  //baseURL: string;
  
  currentCulture: string;
  
  // private lastTimestamp: moment.Moment =  moment('1999-01-01');
  
  constructor(http: HttpClient,
              private storageService: StorageService,
              private auth: AuthService) {
    super(http, environment.baseUrl+'languages', 3600);
      this.currentCulture = 'pt-BR';
   }
  
  
   getUserSavedLanguage(): Promise<any> {
    return this.storageService.getAsync(environment.languageKey);
   }
  
   saveLocallyUserLanguage(selectedLanguage: string): Promise<any> {
    return this.storageService.setAsync(environment.languageKey, selectedLanguage);
   }
  
   getCurrentCulture(): string {
     return this.currentCulture;
  
   }
  
   setCurrentCulture(culture: string) {
     this.currentCulture = culture;
   }
  
  
  }

function Injectablele(arg0: { providedIn: string; }) {
    throw new Error("Function not implemented.");
}
  