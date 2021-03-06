import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

import { AppUserService } from './app-user.service';

@Injectable()
export class AppFirebaseService implements AppUserService{

  id : string; 
  name : string;
  email : string;
  photo : string;
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

  giveMedal(id : string, name : string, icon : string, word : string){
    
    let flag =false;
    this.firebase.database.list('record/'+id).subscribe(
      data =>{
        data.map(item => {
          if(item.$key == 'medal'){
            let dol =/^[$]/;
            Object.keys(item).filter(obj => !dol.test(obj)).map(obj =>{
              if(item[obj].name == name)flag=true;
            });

            if(!flag){
              let medal = { 'name': name, 'icon': icon, 'word': word };
              let msg = '\n\n당신은 메달을 획득하였습니다.\n\n'+
                        '메달 : '+medal.name+'\n\n설명 : '+medal.word+'\n';
              alert(msg);
              this.firebase.database.list('record/'+this.playerData.uid+'/medal').push(medal);
            }

          }
        });
      }
    );
  }

}
