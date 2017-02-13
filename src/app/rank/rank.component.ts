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
    let flag : boolean;
    this.appFirebaseService.firebase.database.list('record').subscribe(
      data =>{
        if(!flag){
          data.map( item => {
            self.playerRank.push({
              'name' : item.name,
              'email' : item.email,
              'photo' : item.photo,
              'time' : item.time,
              'kill' : item.kill});
          });
          flag = true;
          self.playerRank.sort(function (a, b) {
            return a.time > b.time ? -1 : a.time < b.time ? 1 : 0;
          });
        }
      }
    );
  }

}
