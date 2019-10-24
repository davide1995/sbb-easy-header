import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from "@sbb-esta/angular-business";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, BrowserAnimationsModule, HeaderModule, RouterModule.forRoot(routes) ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
