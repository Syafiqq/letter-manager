import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingPageComponent} from './view/dummy/landing-page/landing-page.component';
import {LoginPageComponent} from './view/dummy/login-page/login-page.component';
import {MaterialModule} from './material.module';
import {RegisterPageComponent} from './view/dummy/register-page/register-page.component';
import {DashboardPageComponent} from './view/dummy/dashboard-page/dashboard-page.component';
import {ArchivePageComponent} from './view/dummy/archive-page/archive-page.component';
import {DetailPageComponent} from './view/dummy/detail-page/detail-page.component';
import {InsertPageComponent} from './view/dummy/insert-page/insert-page.component';

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
