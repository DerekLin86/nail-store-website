import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './index/index.module#IndexModule',
    pathMatch: 'full'
  }, {
    path: '**',
    loadChildren: './index/index.module#IndexModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
