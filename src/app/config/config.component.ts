import { Component, OnInit } from '@angular/core';

import { AppFirebaseService } from '../providers/app-firebase.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  playerName : string;
  playerEmail : string;

  playerRecord : any = [];

  medals = [
    {
      name: '착한 훈장',
      icon: 'face'
    },
    {
      name: '일급 훈장',
      icon: 'face'
    },
    {
      name: '한조 50킬 훈장',
      icon: 'face'
    },
    {
      name: '시즌1 랭킹권 훈장',
      icon: 'face'
    }
  ];


  constructor(private appFirebaseService : AppFirebaseService) {
      this.playerName = this.appFirebaseService.playerData.auth.displayName;
      this.playerEmail = this.appFirebaseService.playerData.auth.email;
      
      this.appFirebaseService.playerRecord.subscribe(
        data =>{
          data.map(item => {
            if(item.$key == 'kill') this.playerRecord.push(item.$value);
            if(item.$key == 'time') this.playerRecord.push(item.$value);
          });
        }
      );
  }

  ngOnInit() {
  }

}
