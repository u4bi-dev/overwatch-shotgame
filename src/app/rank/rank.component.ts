import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  users = [
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    },
    {
      name: '홍길동',
      score: 42,
      kill : 23
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
