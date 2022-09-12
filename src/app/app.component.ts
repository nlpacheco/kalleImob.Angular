import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BaseUserPreference } from './helpers/base-user-preferences';
import { GlobalParameters } from './helpers/global-parameters/global-parameters';
import { AuthService } from './services/auth.service';
import { LanguageService } from './services/language.service';
import { UserPreferencesService } from './services/UserPreferencesService';
import { NotificationService } from './shared/notification/notification.service';
import { Utils } from './shared/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseUserPreference implements OnInit, OnDestroy {

  title = 'kalle Imob';
  navbarOpen = false;
  version = GlobalParameters.version;
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  logoURL = GlobalParameters.imageUrl + 'logo_retorna_machine.png';

  constructor(  private translate: TranslateService,
                private langService: LanguageService,
                authService: AuthService,
                userPreferencesService: UserPreferencesService,
                private notificationService: NotificationService,
                private router: Router,
                private changeDetectorRef: ChangeDetectorRef, 
                private media: MediaMatcher) 
  {
    super(userPreferencesService, authService);

    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.notificationService.success('Teste de mensagem');


    //  environment.supportedLangs.forEach((language) => {
    //    this.translate.reloadLang(language);
    //  });
    //  this.translate.use(lng);
    //console.log('AppComponent - getBrowserLang:', lng); 

    this.langService.getUserSavedLanguage()
      .then(lng => {

        console.log('AppComponent - Languange: ', lng);

        if (Utils.IsStringEmpty(lng)) {

            //lng = this.translate.getBrowserLang();
            lng = 'pt-BR';
            console.log('AppComponent - Default Lang: ', lng);
            this.translate.setDefaultLang(lng);
            this.translate.use(lng);
            //this.langService.setCurrentCulture(lng);

        } else 
        {
            this.translate.setDefaultLang(lng);
            this.translate.use(lng);
            //this.langService.setCurrentCulture(lng);
        }


        // if (typeof l  === 'string'  && l.length > 0) {

        //   translate.use(l).subscribe( {
        //     next: () =>  console.log('AppComponent Language - Set - Suceess'),
        //     error: err => console.log('AppComponent Language - Set - ERROR: ', err)
        //   });

        //   translate.reloadLang(l).subscribe({
        //     next: () =>  console.log('AppComponent Language - reloadLang - Suceess'),
        //     error: err => console.log('AppComponent Language - reloadLang - ERROR: ', err)
        //   });

        //   this.langService.setCurrentCulture(l);

          //    this.router.navigateByUrl('home');
          //  } else {
          //    this.router.navigateByUrl('introduction');
          //}
          //this.router.navigateByUrl('welcome-page');

        })
      .catch(e => {
        console.log('WelcomePage - Languange error: ', e);
        this.router.navigateByUrl('welcome-page') ;
      });

  }


async onLogout() {
    console.log('AppComponent - onLogout');
    await this.authService.logout();
    console.log('AppComponent - onLogout - fim');
    this.router.navigateByUrl('');
}

ngOnInit(): void {
  // console.log('AppComponent - onInit');
  //this.authService.getDecodeToken();
}

ngOnDestroy(): void {
  this.mobileQuery.removeListener(this.mobileQueryListener);
}

newToggleNavMenu(newNavbarOpen: boolean){
  this.navbarOpen = newNavbarOpen;
}

LoggedIn() {
  return this.authService.loggedIn();
}

LoggedUsername() {
  return this.authService.loggedinUsername();
}

logout() {
  this.authService.logout();
  this.notificationService.success('logged out');
  this.router.navigate(['home']);
}

toggleDarkTheme() {
  this.userPreferencesService.darkMode = !this.userPreferencesService.darkMode;
}

toggleDebugMode() {
  this.userPreferencesService.debugMode = !this.userPreferencesService.debugMode;
}

}
