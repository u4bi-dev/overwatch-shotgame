import { Injectable } from '@angular/core';

import { Ingame } from './ingame';

@Injectable()
export class IngameService implements Ingame{

  wallpaper  : any;
  hanzo      : any;
  click      : any;
  infoWord   : any;
  crosshair  : any;
  target     : any;
  audio_die  : any;
  audio_kill : any;
  audio_stop : any;
  
  window = {
    width  : 1920,
    height : 1200
  };

  started : boolean;
  timer : number;
  nerf : number;

  interval : any;

  resultWord : any;
  resultWordAttribute = {
    font: 'bold 5rem NanumGothic',
    fill: '#ffff00'
  };

  event  : boolean;
  attack : any;

  constructor() { }

}
