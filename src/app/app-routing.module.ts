import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './view/landing-page/landing-page.component';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './view/login-page/login-page.component';
import {RegisterPageComponent} from './view/register-page/register-page.component';
import {DashboardPageComponent} from './view/dashboard-page/dashboard-page.component';
import {ArchivePageComponent} from './view/archive-page/archive-page.component';
import {DetailPageComponent} from './view/detail-page/detail-page.component';
import {InsertPageComponent} from './view/insert-page/insert-page.component';

const routes: Routes = [
  {path: 'landingpage', component: LandingPageComponent},
  {path: 'loginpage', component: LoginPageComponent},
  {path: 'registerpage', component: RegisterPageComponent},
  {path: 'dashboardpage', component: DashboardPageComponent},
  {path: 'archivepage', component: ArchivePageComponent},
  {path: 'detailpage', component: DetailPageComponent},
  {path: 'insertpage', component: InsertPageComponent},
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
