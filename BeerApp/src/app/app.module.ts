import { IngredientsComponent } from './beer/ingredients/ingredients.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
   exports: [
   ],
   declarations: [
      AppComponent,
      BeerComponent,
      IngredientsComponent
   ],
   imports: [
      BrowserModule,
   ],
   providers: [{provide: APP_BASE_HREF, useValue: '/'}],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
