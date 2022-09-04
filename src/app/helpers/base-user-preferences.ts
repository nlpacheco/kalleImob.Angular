import { AuthService } from "../services/auth.service";
import { UserPreferencesService } from "../services/UserPreferencesService";
import { GlobalParameters } from "./global-parameters/global-parameters";


export class BaseUserPreference  {

spinner: string = GlobalParameters.spinnerUrl;
  
  
    // onUserPreferencesLoaded: any = () => {
    //   console.error('onUserPreferencesLoaded null');
    // };
  
constructor(public userPreferencesService: UserPreferencesService,
            protected authService: AuthService,
            private onUserPreferencesLoaded: () => any = () => {
                  console.log('onUserPreferencesLoaded null');
            }
    ) {
  
        //this.userPreferencesService.setAuthService(this.authService);
        this.userPreferencesService.getUserPreferenceNotifications().subscribe(
          s => {
            console.log('BaseUserPreference - new UserPreferences?', s );
            if (s) {
              console.log('BaseUserPreference - calling onUserPreferencesLoaded', this.userPreferencesService);
              this.onUserPreferencesLoaded();
            }
        });
  
    }
}
  