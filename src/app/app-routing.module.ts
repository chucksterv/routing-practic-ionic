import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'page-one',
    loadChildren: () =>
      import('./pages/page-one/page-one.module').then(
        (m) => m.PageOnePageModule
      ),
  },
  {
    path: 'page-two',
    loadChildren: () =>
      import('./pages/page-two/page-two.module').then(
        (m) => m.PageTwoPageModule
      ),
  },
  {
    path: 'page-three',
    loadChildren: () =>
      import('./pages/page-three/page-three.module').then(
        (m) => m.PageThreePageModule
      ),
  },
  {
    path: 'page-four',
    loadChildren: () =>
      import('./pages/page-four/page-four.module').then(
        (m) => m.PageFourPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
