import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ma TodoList !';
  item: string = null;

// Declaration de la liste
itemsList : Array<string> = [
  "Apprendre Angular",
  "Apprendre PHP",
  "S'éclater avec Symfony !",
];

// Déclaration de méthodes
addToList() 
{
  // Sortie de la méthode si le champ est vide
  if (this.item.length > 0)
  {

    // Autre méthode : if (this.item.length <= 0) { return; }
    // alter ( this.item );
    // récupére la valeur saisie

    // Ajouter la valeur à la liste
    this.itemsList.push( this.item );

    // Effacer le champ de saisie
    this.item ="";
  }
}
  removeFromList(index) {
    alert( index );
    this.itemsList.splice( index, 1 );
  }
}
