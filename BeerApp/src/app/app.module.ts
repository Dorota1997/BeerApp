import { IngredientsComponent } from './beer/ingredients/ingredients.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerComponent } from './beer/beer.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      BeerComponent,
      IngredientsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgbModule,
      BrowserAnimationsModule
   ],
   providers: [{provide: APP_BASE_HREF, useValue: '/'}],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

