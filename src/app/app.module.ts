import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IngameComponent } from './ingame/ingame.component';

import { MaterialModule } from '@angular/material';
import { AppRouteModule } from './app-route/app-route.module';

import 'hammerjs';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { RankComponent } from './rank/rank.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    IngameComponent,
    InfoComponent,
    MainComponent,
    RankComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
