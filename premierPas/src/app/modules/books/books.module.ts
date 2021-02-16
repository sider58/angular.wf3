import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './components/index/index.component';
import { ReadComponent } from './components/read/read.component';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [
    IndexComponent, 
    ReadComponent, BooksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
