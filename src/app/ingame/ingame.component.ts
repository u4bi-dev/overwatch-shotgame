/// <reference path='../../lib/phaser.d.ts'/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  progress: number = 0;

  constructor() {
      setInterval(() => {
          this.progress += 1 % 100;
      }, 1000);

      this.game = new Phaser.Game(1280, 850, Phaser.AUTO, 'ingame', {
          preload: this.preload,
          create: this.create,
          update: this.update
      });
  }

  ngOnInit() {

  }

  game: Phaser.Game;

  preload() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
  }

  create() {

  }

  update() {

  }

}
