import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'truckdetails',
    loadChildren: () => import('./pages/truck-details/truck-details.module').then(m => m.TruckDetailsPageModule)
  },
  // {
  //   path: 'pan',
  //   loadChildren: () => import('./pages/pan-details/pan.module').then(m => m.PanPageModule)
  // },
  // {
  //   path: 'gst',
  //   loadChildren: () => import('./pages/gst-details/gst.module').then(m => m.GstPageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
