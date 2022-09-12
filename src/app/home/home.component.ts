import { Component } from '@angular/core';
import { DashboardContracts } from '../model/dashboard-contracts';
import { DashboardProperties } from '../model/dashboard-properties';
import { AuthService } from '../services/auth.service';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

dashboardContracts?: DashboardContracts ;
dashboardProperties?: DashboardProperties;

  constructor(  private authService: AuthService,
                private dashboard: DashboardService) { 

                
    this.dashboard.getDashboardContract().then(dashboard=> this.dashboardContracts = dashboard);

    this.dashboard.getDashboardProperties().then(dashboard => this.dashboardProperties = dashboard);

};


  LoggedIn() {
    return this.authService.loggedIn();
  }

}
