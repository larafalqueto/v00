import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-persons',
    templateUrl: './persons-input.component.html'
})


export class PersonsComponent {
  @Input() personList: string[];
}
