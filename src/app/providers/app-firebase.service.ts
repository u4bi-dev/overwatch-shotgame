import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AppFirebaseService {

  constructor(public firebase: AngularFire) { }

  loginGoogle() {
    return this.firebase.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  loginFacebook() {
    return this.firebase.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

  logout(){
    return this.firebase.auth.logout();
  }

}
