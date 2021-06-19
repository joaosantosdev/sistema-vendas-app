import {NgModule} from '@angular/core';
import {HomePage} from './home.page';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CategoryItemsComponent} from '../../components/category-items/category-items.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    HomePage,
    CategoryItemsComponent
  ],
  imports: [
    CommonModule,
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
