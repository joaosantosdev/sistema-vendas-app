import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.page.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.page.module').then( m => m.ProfilePageModule)
      }
    ]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.page.module').then(m => m.SignupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
