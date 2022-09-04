import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
  
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
  
        // { path: 'campaignDashboard/:' + GlobalParameters.idParameterName, component: CampaignDashboardComponent},
  
      ]
    },
    // {
    //   path: 'dashboards',
    //   runGuardsAndResolvers: 'always',
    //   canActivate: [AuthGuard],
    //   loadChildren: () => import('./CRUDViews/dashboards/dashboards.module').then(mod => mod.DashboardModule)
    // },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
