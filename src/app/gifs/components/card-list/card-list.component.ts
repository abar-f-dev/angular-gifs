import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: `./card-list.component.html`,
})
export class CardListComponent {
  public list: string[] = ['Primero', 'Segundo', 'Tercero', 'Cuarto']
 }
