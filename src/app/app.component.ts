import { Component, Sanitizer } from '@angular/core';
import {ConectDataService} from './conect-data.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConectDataService]
})
export class AppComponent {

  constructor(private conectService: ConectDataService) {  }

  onAddConect(conect) {    
    this.conectService.addConect(conect);
  }
  onUpdateConect(conect) {
    this.conectService.updateConect(conect);
  }
  onDeleteConect(conect) {
    this.conectService.deleteConect(conect.id);
  }
  get conects() {
    return this.conectService.getConect();
  }
}
