import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {ArchivePageComponent} from './archive-page/archive-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {InsertPageComponent} from './insert-page/insert-page.component';

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
