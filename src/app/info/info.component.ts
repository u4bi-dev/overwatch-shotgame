import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private snackbar: MdSnackBar) { }

  ngOnInit() {
  }

  showMaxrecord() {
      this.snackbar.open('당신의 최고 기록 시간은 39.54초 입니다.', '확인');
  }

}
