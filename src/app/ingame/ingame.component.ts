/// <reference path='../../lib/phaser.d.ts'/>
import { Component, OnInit } from '@angular/core';
import { Ingame } from '../providers/ingame';
import { INGAME } from '../providers/mock-ingame';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  progress: number = 0;
  game: Phaser.Game;

  constructor() {
      setInterval(() => { this.progress += 1 % 100;}, 1000);
  }

  ngOnInit() {
    this.game = new Phaser.Game(1920, 1200, Phaser.AUTO, 'ingame', {
        preload: this.preload,
        create: this.create,
        update: this.update
    });
  }

  preload() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    let resource = INGAME;
    let path = '../../../../';

    this.game.load.image('wallpaper', path+resource.wallpaper);
    this.game.load.image('hanzo', path+resource.hanzo);
    this.game.load.image('click', path+resource.click);
    this.game.load.image('infoword', path+resource.infoWord);
    this.game.load.image('crosshair', path+resource.crosshair);
    this.game.load.image('target', path+resource.target);
  }

  create() {
    this.game.add.tileSprite(0, 0, 1920, 1200, 'wallpaper');
  }

  update() {

  }

}
