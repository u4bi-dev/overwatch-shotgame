/// <reference path='../../lib/phaser.d.ts'/>
import { Component, OnInit } from '@angular/core';
import { IngameService } from '../providers/ingame.service';

import { INGAME_RESOURCE_PATH } from '../providers/mock-ingame';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  game: Phaser.Game;

  constructor(private ingameService : IngameService) {
  }

  ngOnInit() {
    this.game = new Phaser.Game(1920, 1200, Phaser.AUTO, 'ingame', {
        preload: this.preload,
        create: this.create,
        update: this.update,
        ingameService : this.ingameService,
        start : this.start,
        ready : this.ready,
        death : this.death,
        target : this.target
    });
  }

  preload() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    let resource = INGAME_RESOURCE_PATH;
    let path = '../../../../';

    this.game.load.image('wallpaper', path+resource.wallpaper);
    this.game.load.image('hanzo', path+resource.hanzo);
    this.game.load.image('click', path+resource.click);
    this.game.load.image('infoWord', path+resource.infoWord);
    this.game.load.spritesheet('crosshair', path+resource.crosshair,80,80);
    this.game.load.image('target', path+resource.target);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    let window = this.ingameService.window;
    this.ingameService.wallpaper = this.game.add.tileSprite(0, 0, window.width, window.height, 'wallpaper');
    this.ready();

    this.ingameService.target = this.game.add.sprite(this.ingameService.click.x, this.ingameService.click.y, 'target');
    this.game.physics.enable(this.ingameService.target, Phaser.Physics.ARCADE);
    this.ingameService.target.body.collideWorldBounds = true;
    this.ingameService.target.body.bounce.set(1);

    this.ingameService.crosshair = this.game.add.sprite(0, 0, 'crosshair');

  }

  update() {
    this.ingameService.crosshair.x = this.game.input.x-(this.ingameService.crosshair.width/2);
    this.ingameService.crosshair.y = this.game.input.y-(this.ingameService.crosshair.height/2); 
 }


  ready(){
    
    let window = this.ingameService.window;

    this.ingameService.infoWord = this.game.add.sprite(window.width/3.7, 0, 'infoWord');
    this.ingameService.click = this.game.add.button(window.width/2, window.height/2, 'click',this.start, this, 1, 0, 2);
    this.ingameService.click.anchor.set(-0.2, -0.2);
  }

  start(){
    this.ingameService.target.body.velocity.set(200, 0);

    this.ingameService.click.destroy();
    this.ingameService.infoWord.destroy();

    this.ingameService.started = true;
    this.ingameService.timer = 0;

    setInterval(() => { 
      this.ingameService.timer += 1 % 100;
      this.target();
    }, 1000);
  }

  death(){
    let window = this.ingameService.window;
    this.ingameService.hanzo = this.game.add.sprite(window.width/5, window.height/2, 'hanzo');
  }

  target(){
    let anchor = this.ingameService.timer;

    let value = Math.floor(Math.random() * 300);
    value+=anchor;

    this.ingameService.target.body.velocity.x +=value;
    this.ingameService.target.body.velocity.y +=value;
  }

}
