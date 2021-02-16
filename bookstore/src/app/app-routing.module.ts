import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { IndexComponent as BooksIndexComponent } from './modules/books/components/index/index.component';
import { IndexComponent as ProductsIndexComponent } from './modules/products/components/index/index.component';


const routes: Routes = [
  { path: '', 
    component: HomeComponent // Ne rien mettre (chaine vide) = site.com/
  },

  {  path: 'contact', // site.com/contact
    component: ContactComponent
  },

  // Books routes
  {
    path: 'books',
    component: BooksIndexComponent
  },

  {
    path: 'products',
    component: ProductsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
