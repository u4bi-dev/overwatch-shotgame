import { RouterModule, Routes } from '@angular/router';

import{ IngameComponent } from '../ingame/ingame.component';
import{ MainComponent } from '../main/main.component';
import{ RankComponent } from '../rank/rank.component';

const routes: Routes =[
  {path: '', component: MainComponent },
  {path: 'ingame', component: IngameComponent },
  {path: 'rank', component: RankComponent },
];

export const AppRouteModule = RouterModule.forRoot(routes);
