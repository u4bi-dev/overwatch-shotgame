import { Component, ViewChild } from '@angular/core';
import { AppCoreService } from './providers/app-core.service';

import {MdSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav:MdSidenav;

  constructor(private appCoreService : AppCoreService){}

  setRouter(path : string){
    this.sidenav.close();
    this.appCoreService.setRouter(path);
  }

}