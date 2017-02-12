import { Component, OnInit } from '@angular/core';

import { AppFirebaseService } from '../providers/app-firebase.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  playerMedal : any = [];  
  playerRecord : any = [];

  constructor(private appFirebaseService : AppFirebaseService) {
  }

  ngOnInit() {

    this.appFirebaseService.firebase.database.list('record/'+this.appFirebaseService.id).subscribe(
      data =>{
        data.map(item => {
          if(item.$key == 'kill') this.playerRecord.push(item.$value);
          if(item.$key == 'time') this.playerRecord.push(item.$value);
          if(item.$key == 'medal'){
            let dol =/^[$]/;
            Object.keys(item).filter(obj => !dol.test(obj)).map(obj => this.playerMedal.push(item[obj]));
          }
        });
      }
    );
  }

}
