import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingPageComponent} from './view/landing-page/landing-page.component';
import {LoginPageComponent} from './view/login-page/login-page.component';
import {MaterialModule} from './material.module';
import {RegisterPageComponent} from './view/register-page/register-page.component';
import {DashboardPageComponent} from './view/dashboard-page/dashboard-page.component';
import {ArchivePageComponent} from './view/archive-page/archive-page.component';
import {DetailPageComponent} from './view/detail-page/detail-page.component';
import {InsertPageComponent} from './view/insert-page/insert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    ArchivePageComponent,
    DetailPageComponent,
    InsertPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
