import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsHandler } from './errors-handler';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorsInterceptor } from './server-errors.interceptor';
import { RouterModule } from '@angular/router';
import { errorsRoutes } from './errors-routing';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorsService } from './errors.service';
import { ErrorsModalComponent } from './errors-modal/errors-modal.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ErrorPageComponent,
    ErrorsModalComponent
  ],
  entryComponents: [ErrorsModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(errorsRoutes),
    ModalModule.forRoot()
  ],
  providers: [
    ErrorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    }
  ]
})
export class ErrorsHandlerModule { }
