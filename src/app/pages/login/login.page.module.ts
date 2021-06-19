import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {LoginPage} from './login.page';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        component: LoginPage,
        path: ''
      }
    ]),
    FormsModule
  ]
})
export class LoginPageModule {
}
