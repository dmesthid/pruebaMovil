import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pagina/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
 
  {
    path: 'alerta',
    loadChildren: () => import('./pagina/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pagina/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pagina/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./pagina/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pagina/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
