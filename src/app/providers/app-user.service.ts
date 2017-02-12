import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class AppUserService {

  name : string;
  email : string;
  photo : string;
  time : number = 0;
  kill : number = 0;
  
  constructor() { }

}
