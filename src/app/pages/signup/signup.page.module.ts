import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';


import {SignupPage} from './signup.page';
import {RouterModule} from '@angular/router';
import {InputContentComponent} from '../../components/input-content/input-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignupPage
      }
    ]),
    ReactiveFormsModule
  ],
  declarations: [SignupPage, InputContentComponent]
})
export class SignupPageModule {
}
