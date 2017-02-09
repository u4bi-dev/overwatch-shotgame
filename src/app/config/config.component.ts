import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

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


  constructor() { }

  ngOnInit() {
  }

}
