import { RouterModule, Routes } from '@angular/router';

import{ IngameComponent } from '../ingame/ingame.component';

const routes: Routes =[
  {path: 'ingame', component: IngameComponent }
];

export const AppRouteModule = RouterModule.forRoot(routes);
