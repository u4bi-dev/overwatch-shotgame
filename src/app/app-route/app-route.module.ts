import { RouterModule, Routes } from '@angular/router';

import{ IngameComponent } from '../ingame/ingame.component';
import{ MainComponent } from '../main/main.component';

const routes: Routes =[
  {path: '', component: MainComponent },
  {path: 'ingame', component: IngameComponent }
];

export const AppRouteModule = RouterModule.forRoot(routes);
