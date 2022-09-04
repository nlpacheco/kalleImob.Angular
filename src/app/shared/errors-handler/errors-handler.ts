import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from './errors.service';
import { BsModalService } from 'ngx-bootstrap';
import { ErrorsModalComponent } from './errors-modal/errors-modal.component';
import { NotificationService } from '../shared/notification/notification.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  // Because the ErrorHandler is created before the providers, we’ll have to use the Injector to get them.
  constructor(private injector: Injector,
  ) { }


  handleError(error: Error | HttpErrorResponse) {

    const notificationService = this.injector.get(NotificationService);
    const errorsService = this.injector.get(ErrorsService);
    // const router = this.injector.get(Router);
    const modalService = this.injector.get(BsModalService);

    if (error instanceof HttpErrorResponse) {

      if (!navigator.onLine) {

        return notificationService.error('No Internet Connection');

      } else {

        // Handle Http Error (error.status === 403, 404...)
        console.error('Error HttpErrorResponse:');

        if (error.status >= 500 || error.status === 400) {
          errorsService
                  .log(error)
                  .subscribe();
        }
        return notificationService.error(`${error.status} - ${error.message}`);
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)

      // Send the error to the server and then
      // redirect the user to the page with all the info
      if (!error) {
        notificationService.error('Null Error!?');
        return;
      }
      errorsService
                .log(error)
                .subscribe(errorWithContextInfo => {
                  const initialState = {
                    data: errorWithContextInfo
                  };
                  modalService.show(ErrorsModalComponent, {initialState});
                 // router.navigate(['/error'], { queryParams: errorWithContextInfo });
                });
    }

    notificationService.error(`${error.name} - ${error.message}`);
  }




}
