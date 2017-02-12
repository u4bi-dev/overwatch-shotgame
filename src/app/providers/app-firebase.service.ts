import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

import { AppUserService } from './app-user.service';

@Injectable()
export class AppFirebaseService implements AppUserService{

  id : string; 
  name : string;
  email : string;
  photo : string = '2';
  time : number = 0;
  kill : number = 0;
  
  public playerData : any;
  public playerRecord : FirebaseListObservable<any>;

  constructor(public firebase: AngularFire) {
    this.firebase.auth.subscribe(
      (auth) =>{
        if(!auth) return this.playerData=null;
        this.playerData = auth;

        let userData = auth.auth;

        this.id = userData.uid;
        this.name = userData.displayName;
        this.email = userData.email;
        this.photo = userData.photoURL;

        this.playerRecord = firebase.database.list('record/'+auth.uid);
      }
    );
  }

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

  updateProfile(name : string, email : string, photo : string){
    let data = {
      'name': name,
      'email': email,
      'photo' : photo
    };

    this.firebase.database.list('record').update(this.playerData.uid, data);
  }

  save(data : any){
    this.firebase.database.list('record').update(this.playerData.uid, data);
  }

  giveMedal(name : string, icon : string, word : string){
    let medal = {
      'name': name,
      'icon': icon,
      'word': word
    };
    this.firebase.database.list('record/'+this.playerData.uid+'/medal').push(medal);
  }

}
