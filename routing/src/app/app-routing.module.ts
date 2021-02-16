import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';

const routes: Routes = [

  // Route Page A
  {
    path: 'page-a',
    component: PageAComponent
  },

  // Route Page B
  {
    path: 'ceci-est-le-path-de-la-page-b',
    component: PageBComponent
  },

  // Route Page C
  {
    path: 'ma-page-c',
    component: PageCComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
