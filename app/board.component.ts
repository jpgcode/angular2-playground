import { Component } from '@angular/core';

@Component({
  selector: 'board',
  template: `
    <ul class="board">
      This board should have {{ cells.length }} cells
      <li *ngFor="let cell of cells"></li>
    </ul>
  `
})

export class BoardComponent  {

  cells = [...Array(9)];

}