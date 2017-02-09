import { Component, OnInit } from '@angular/core';
import { AppCoreService } from '../providers/app-core.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private appCoreService : AppCoreService){}

  ngOnInit() {
  }

  setRouter(path : string){
    this.appCoreService.setRouter(path);
  }

}
