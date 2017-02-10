import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { AppFirebaseService } from '../providers/app-firebase.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  constructor(private snackbar: MdSnackBar, private appFirebaseService : AppFirebaseService) { }

  ngOnInit() {
  }

  showMaxrecord() {
      this.appFirebaseService.playerRecord.subscribe(
        data =>{
          data.map(item => {
            if(item.$key == 'time')
              this.snackbar.open('당신의 최고 기록 시간은 '+item.$value+'초 입니다.', '확인',{ duration: 1500});
          });
        }
      );
  }

  showInfo() {
      this.snackbar.open('닉네임 홍길동 레벨 24 경험치 32/100', '확인',{ duration: 3000});
  }
}
