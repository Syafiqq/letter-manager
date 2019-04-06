import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MaterialModule} from './material.module';
import {RegisterPageComponent} from './register-page/register-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {ArchivePageComponent} from './archive-page/archive-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {InsertPageComponent} from './insert-page/insert-page.component';

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
