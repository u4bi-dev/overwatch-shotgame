import { Component, OnInit } from '@angular/core';

import { AppFirebaseService } from '../providers/app-firebase.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  playerRank : any = [];

  constructor(private appFirebaseService : AppFirebaseService) {}
  
  ngOnInit() {
    let self = this;

    this.appFirebaseService.firebase.database.list('record').subscribe(
      data =>{
        let tick = 0;
        data.map( item => {
          tick++;
          if(tick > 9)return 0;
          self.playerRank.push({
            'name' : item.name,
            'email' : item.email,
            'photo' : item.photo,
            'time' : item.time,
            'kill' : item.kill});
        });
      }
    );
  }

}
