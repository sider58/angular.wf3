import { Component, OnInit } from '@angular/core';

import { BookInterface } from './../../interfaces/book';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  books: Array<BookInterface> = [
    {
      id: 1,
      title: "Titre du livre",
      price: 9.99,
      description: "lorem ipsum...",
      illustration: ""
    },
    {
      id: 2,
      title: "Titre du second livre",
      price: 45,
      description: "lorem ipsum...",
    },
    {
      id: 3,
      title: "Titre du Super livre",
      price: 99.99
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
