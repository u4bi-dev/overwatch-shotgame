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
  playerMedal : any = [];
  
  playerRecord : any = [];

  constructor(private appFirebaseService : AppFirebaseService) {
      this.playerName = this.appFirebaseService.playerData.auth.displayName;
      this.playerEmail = this.appFirebaseService.playerData.auth.email;
      
      this.appFirebaseService.playerRecord.subscribe(
        data =>{
          data.map(item => {
            if(item.$key == 'kill') this.playerRecord.push(item.$value);
            if(item.$key == 'time') this.playerRecord.push(item.$value);
            if(item.$key == 'medal'){
              let dol = /^[$]/;
              for(let obj in item) if(!dol.test(obj))
                this.playerMedal.push(item[obj]);
            }
          });
        }
      );
  }

  ngOnInit() {
  }

}
