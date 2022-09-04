import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private authService: AuthService) { }

  LoggedIn() {
    return this.authService.loggedIn();
  }

}
