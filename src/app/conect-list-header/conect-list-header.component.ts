import {Component, EventEmitter, Output} from '@angular/core';
import {Conect} from '../conect';

@Component({
  selector: 'app-conect-list-header',
  templateUrl: './conect-list-header.component.html',
  styleUrls: ['./conect-list-header.component.css']
})
export class ConectListHeaderComponent  {

  newConect: Conect = new Conect();

  @Output()
  add: EventEmitter<Conect> = new EventEmitter();

  constructor() { }

  addConect() {
    this.add.emit(this.newConect);
    this.newConect = new Conect();
  }
}
