import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CategoryService} from './services/category.service';
import {HttpService} from './services/http.service';
import {LayoutComponent} from './components/layout/layout.component';
import {TabMenuComponent} from './components/tab-menu/tab-menu.component';
import {TabItemComponent} from './components/tab-item/tab-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TabMenuComponent,
    TabItemComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    CategoryService,
    HttpService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
