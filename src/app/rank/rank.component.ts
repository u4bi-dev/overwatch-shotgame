import { Component, OnInit } from '@angular/core';

import { AppFirebaseService } from '../providers/app-firebase.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  playerRank : any = [];

  constructor(private appFirebaseService : AppFirebaseService) {
    let self = this;

    this.appFirebaseService.firebase.database.list('record').subscribe(
      data =>{
        data.forEach(function(item){
          self.playerRank.push({
            'name' : item.name,
            'time' : item.time,
            'kill' : item.kill
          });
          console.log(self.playerRank);
        });
      }
    );
  }

  ngOnInit() {
  }

}
