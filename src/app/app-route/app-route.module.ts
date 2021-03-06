import { RouterModule, Routes } from '@angular/router';

import{ IngameComponent } from '../ingame/ingame.component';
import{ MainComponent } from '../main/main.component';
import{ RankComponent } from '../rank/rank.component';
import{ ConfigComponent } from '../config/config.component';
import{ LoginComponent } from '../login/login.component';

const routes: Routes =[
  {path: '', component: MainComponent },
  {path: 'ingame', component: IngameComponent },
  {path: 'rank', component: RankComponent },
  {path: 'config', component: ConfigComponent },
  {path: 'login', component: LoginComponent }
];

export const AppRouteModule = RouterModule.forRoot(routes);
