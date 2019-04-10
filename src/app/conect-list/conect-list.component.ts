import {Component, EventEmitter, Input, Output, Pipe} from '@angular/core';
import {Conect} from '../conect';

@Component({
  selector: 'app-conect-list',
  templateUrl: './conect-list.component.html',
  styleUrls: ['./conect-list.component.css']
})

export class ConectListComponent {
  @Input()
  conectsList: Conect[];

  @Output()
  remove: EventEmitter<Conect> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Conect> = new EventEmitter();

  onDeleteConnectListen(connect: Conect) {
    this.remove.emit(connect);
  }

}
