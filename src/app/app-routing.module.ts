import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.page.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.page.module').then(m => m.CategoryPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
