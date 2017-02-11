import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class AppFirebaseService {

  public playerData : any;
  public playerRecord : FirebaseListObservable<any>;

  constructor(public firebase: AngularFire) {
    this.firebase.auth.subscribe(
      (auth) =>{
        if(!auth) return 0;
        this.playerData = auth;
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

  save( time : number, kill : number){
    let data = {
      'time': time,
      'kill': kill
    };

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
