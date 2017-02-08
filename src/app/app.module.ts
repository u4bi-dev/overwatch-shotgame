import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IngameComponent } from './ingame/ingame.component';

import { MaterialModule } from '@angular/material';
import { AppRouteModule } from './app-route/app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    IngameComponent
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
