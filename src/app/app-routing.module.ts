import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';

const routes: Routes = [
  {path: 'landingpage', component: LandingPageComponent},
  {path: 'loginpage', component: LoginPageComponent},
  {path: 'registerpage', component: RegisterPageComponent},
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
