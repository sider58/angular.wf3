import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { ReadComponent } from './components/read/read.component';



@NgModule({
  declarations: [IndexComponent, ReadComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
