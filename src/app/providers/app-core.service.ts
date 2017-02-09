import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppCoreService {

  constructor(private router : Router) { }

  setRouter(path : string){
    this.router.navigate(['/'+path]);
  }
  
}
