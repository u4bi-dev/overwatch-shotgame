import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IngameComponent } from './ingame/ingame.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

import { MaterialModule } from '@angular/material';
import { AppRouteModule } from './app-route/app-route.module';

import 'hammerjs';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { RankComponent } from './rank/rank.component';
import { ConfigComponent } from './config/config.component';
import { LoginComponent } from './login/login.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';

import { AppCoreService } from './providers/app-core.service';
import { AppFirebaseService } from './providers/app-firebase.service';
import { AppUserService } from './providers/app-user.service';
import { IngameService } from './providers/ingame.service';

@NgModule({
  declarations: [
    AppComponent,
    IngameComponent,
    InfoComponent,
    MainComponent,
    RankComponent,
    ConfigComponent,
    LoginComponent,
    DetailInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    AppRouteModule
  ],
  providers: [
    AppCoreService,
    AppFirebaseService,
    AppUserService,
    IngameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
