import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenericHttpServiceWithCache } from "../helpers/generic-http-service/generic-http-service-with-cache";
import { Language } from "../model/language";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class StorageService {
    /// private _storage: Storage | null = null;
  
    private storage: Storage;
    
    constructor() {
      
      this.storage = localStorage;
    }
  

    // Create and expose methods that users of this service can
    // call, for example:
    public set(key: string, value: any) {
      return this.storage.setItem(key, value);
    }
  
    public get(key: string) {
      return this.storage.getItem(key);
    }
  
    public remove(key: string) {
        this.storage.removeItem(key);
    }

    
    public async setAsync(key: string, value: any) {
        return this.storage.setItem(key, value);
      }
    
      public async getAsync(key: string) {
        return this.storage.getItem(key);
      }
    
      public async removeAsync(key: string) {
          this.storage.removeItem(key);
      }
  
  }
  