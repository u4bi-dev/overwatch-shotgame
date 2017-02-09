import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AppFirebaseService {

  constructor(public firebase: AngularFire) { }

}
