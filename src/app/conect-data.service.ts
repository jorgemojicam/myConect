import { Injectable } from '@angular/core';
import {Conect} from './conect';

@Injectable({
  providedIn: 'root'
})
export class ConectDataService {

  lastId = 0;
  conects: Conect[] = [];

  constructor() { }

  addConect(newConect: Conect): ConectDataService {
    if (!newConect.id) {
      newConect.id = ++this.lastId;
    }
    if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(newConect.url)){
      newConect.type = 0;
    }else{
      newConect.type = 1;
    }
    this.conects.push(newConect);
    return this;
  }

  deleteConect(id: number) {
    this.conects = this.conects.filter(it => it.id !== id);
  }
  // Simulate GET /todos/:id
  getConectsById(id: number): Conect {
    return this.conects
      .filter(todo => todo.id === id)
      .pop();
  }

  updateConect(id: number, values: object = {}): Conect {
    const oldconect = this.getConectsById(id);
    if (!oldconect) {
      return null;
    }
    Object.assign(oldconect, values);
    return oldconect;
  }

  getConect(): Conect[] {
    return this.conects;
  }
}
