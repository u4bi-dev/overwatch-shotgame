/// <reference path='../../lib/phaser.d.ts'/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  constructor() {
      this.game = new Phaser.Game(300, 400, Phaser.AUTO, 'ingame', {
          preload: this.preload,
          create: this.create,
          update: this.update
      });
  }

  ngOnInit() {

  }

  game: Phaser.Game;

  preload() {

  }

  create() {

  }

  update() {

  }

}
