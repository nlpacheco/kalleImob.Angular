import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// Cool library to deal with errors: https://www.stacktracejs.com
import * as StackTraceParser from 'error-stack-parser';
import { GlobalParameters } from 'src/app/helpers/global-parameters/global-parameters';
import { AuthService } from '../shared/auth-service/auth.service';




@Injectable()
export class ErrorsService {


  constructor(private injector: Injector) { }

  log(error) {

    // Log the error to the console
    console.error(error);
    // Send error to server
    const errorToSend = this.addContextInfo(error);
    const httpClient = this.injector.get(HttpClient);
    return httpClient.post(GlobalParameters.errorApiURL, errorToSend);
  }


  addContextInfo(error) {

    const authService = this.injector.get(AuthService);

    // All the context details that you want (usually coming from other services; Constants, UserService...)
    const name = error.name || null;
    const appId = GlobalParameters.AppId;
    const user = authService.loggedinUsername();
    const time = new Date().getTime();
    const errorId = `${appId}-${user}-${time}`;
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    let stack: any = null;
    try {
       stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);
    } catch (e)
    {
      console.log('StackTraceParser error' );
      console.log(e);
    }
    const errorToSend = { name, appId, user, time, errorId, url, status, message, stack };
    return errorToSend;
  }

}
