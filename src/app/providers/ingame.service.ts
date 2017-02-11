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

  constructor() { }

}
