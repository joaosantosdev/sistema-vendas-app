import {NgModule} from '@angular/core';
import {HomePage} from './home.page';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomePage],
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ]
})
export class HomePageModule {
}
