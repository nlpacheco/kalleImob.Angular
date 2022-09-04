import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';


export const errorsRoutes: Routes = [
  { path: 'error', component: ErrorPageComponent },
  // { path: '**', component: ErrorPageComponent, data: { error: 404 } },
]
