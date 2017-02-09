import { Component } from '@angular/core';
import { AppCoreService } from './app-core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appCoreService : AppCoreService){}

  setRouter(path : string){
    this.appCoreService.setRouter(path);
  }

}