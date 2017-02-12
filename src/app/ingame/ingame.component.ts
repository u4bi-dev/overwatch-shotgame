/// <reference path='../../lib/phaser.d.ts'/>
import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { IngameService } from '../providers/ingame.service';
import { AppFirebaseService } from '../providers/app-firebase.service';

import { INGAME_RESOURCE_PATH } from '../providers/mock-ingame';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  game: Phaser.Game;

  constructor(private snackbar: MdSnackBar, private ingameService : IngameService, private appFirebaseService : AppFirebaseService) {
  }

  ngOnInit() {
    let window = this.ingameService.window;
    this.game = new Phaser.Game(window.width, window.height, Phaser.AUTO, 'ingame', {
        preload: this.preload,
        create: this.create,
        update: this.update,
        ingameService : this.ingameService,
        appFirebaseService : this.appFirebaseService,
        start : this.start,
        ready : this.ready,
        kill : this.kill,
        death : this.death,
        target : this.target,
        loss : this.loss,
        snackbar : this.snackbar,
        save : this.save
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

    this.game.load.audio('die', path+resource.audio_die);
    this.game.load.audio('kill', path+resource.audio_kill);
    this.game.load.audio('stop', path+resource.audio_stop);
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
    this.ingameService.target.checkWorldBounds = true;

    this.ingameService.crosshair = this.game.add.sprite(0, 0, 'crosshair');
    this.game.physics.enable(this.ingameService.crosshair, Phaser.Physics.ARCADE);

    this.game.input.onDown.add(this.kill, this);
    this.ingameService.crosshair.animations.add('attack', [1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 10, false);

    this.ingameService.audio_die = this.game.add.audio('die');
    this.ingameService.audio_kill = this.game.add.audio('kill');
    this.ingameService.audio_stop = this.game.add.audio('stop');
  }

  update() {
    this.ingameService.crosshair.x = this.game.input.x-(this.ingameService.crosshair.width/2);
    this.ingameService.crosshair.y = this.game.input.y-(this.ingameService.crosshair.height/2);
    
    let inside = this.game.physics.arcade.overlap(this.ingameService.crosshair, this.ingameService.target, null, null, this);
    if(this.ingameService.started && !inside){
        if(this.ingameService.timer == 0) return;
        clearTimeout(this.ingameService.attack);

        this.loss();
        this.ingameService.audio_die.play();

   }
  }


  ready(){
    
    let window = this.ingameService.window;

    this.ingameService.infoWord = this.game.add.sprite(window.width/3.7, 0, 'infoWord');
    this.ingameService.click = this.game.add.button(window.width/2, window.height/2, 'click',this.start, this, 1, 0, 2);
    this.ingameService.click.anchor.set(-0.2, -0.2);
  }

  start(){
    if(!this.appFirebaseService.playerData) return this.snackbar.open('로그인 후에 게임을 시작하실 수 있습니다.','확인',{ duration: 1500});
      
    this.ingameService.target.body.velocity.set(200, 0);

    this.ingameService.click.destroy();
    this.ingameService.infoWord.destroy();

    this.ingameService.started = true;
    this.ingameService.timer = 0;
    this.ingameService.nerf = 0;


    let window = this.ingameService.window;
    let timerText = '누적시간 : '+this.ingameService.timer+'초';

    if(this.ingameService.resultWord){
      this.ingameService.resultWord.x = window.width/1.6;
      this.ingameService.resultWord.y = 5;
      this.ingameService.resultWord.text = timerText;
    } else this.ingameService.resultWord = this.game.add.text(window.width/1.6, 5, timerText, this.ingameService.resultWordAttribute);


    this.ingameService.interval = setInterval(() => { 
      this.ingameService.timer++;
      this.target();
      
       this.ingameService.resultWord.text = '누적시간 : '+this.ingameService.timer+'초';
    }, 1000);
  }

  kill(){
    let started = this.ingameService.started;
    let timer = this.ingameService.timer;
    let event      = this.ingameService.event;

    if(!started)return;
    if(timer == 0) return;
    if(!event) return this.death;

    clearTimeout(this.ingameService.attack);
    this.ingameService.event=false;

    this.ingameService.audio_kill.stop();
    this.ingameService.audio_stop.play();
    this.ingameService.nerf++;
    this.ingameService.resultWord.text = '한조 궁너프!';
  }

  death(){
    this.ingameService.audio_kill.play();

    this.ingameService.started = false;
    let window = this.ingameService.window;
    this.ingameService.hanzo = this.game.add.sprite(window.width/5, window.height/2, 'hanzo');
    
    this.ingameService.event = false;
    setTimeout(() => {
      this.loss();
    }, 1000);
  }

  target(){
    let anchor = this.ingameService.timer;

    let value = Math.floor(Math.random() * 100);
    value+=anchor;

    this.ingameService.target.body.velocity.x +=value;
    this.ingameService.target.body.velocity.y +=value;

    let flag = Math.floor(Math.random() * 2);
    if(flag){
      let started = this.ingameService.started;
      let timer   = this.ingameService.timer;
      let event   = this.ingameService.event;
      if(started && !event && timer != 0 && value%5 == -0){
        this.ingameService.event = true;

        this.ingameService.crosshair.animations.play('attack');;
        this.ingameService.attack = setTimeout(() => {  
            this.death();
        }, 1000);

      }
    }

  }

  loss(){
    clearTimeout(this.ingameService.interval);
    if(this.ingameService.hanzo) this.ingameService.hanzo.destroy();

    this.ingameService.started = false;
    this.ready();

    let click = this.ingameService.click;
    this.ingameService.target.reset(click.x, click.y);
    this.ingameService.target.body.velocity.set(0, 0);

    let window = this.ingameService.window;

    this.ingameService.resultWord.x = window.width/1.5;
    this.ingameService.resultWord.y = window.height/2;

    let timer = this.ingameService.timer;
    let nerf = this.ingameService.nerf;
    this.ingameService.resultWord.text = timer+'초!\n궁 너프 '+nerf+'회';
    this.save(timer, nerf);
    this.snackbar.open('당신의 경기 결과는 경과시간 '+timer+'초 처치 '+nerf+'회입니다.','',{ duration: 3000});
  }

  save(time : number, kill : number){
    let result = {};
    let flag : boolean;

    this.appFirebaseService.playerRecord.subscribe(
      data =>{
        data.map(item => {
          if(item.$key == 'time' && item.$value < time) result['time'] = time;
          if(item.$key == 'kill' && item.$value < kill) result['kill'] = kill;
        });

        if(flag=!flag)this.appFirebaseService.save(result);
        
      }
    );
  }

}
