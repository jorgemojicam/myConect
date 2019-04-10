import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConectsComponent } from './conects/conects.component';
import { ConectListHeaderComponent } from './conect-list-header/conect-list-header.component';
import {FormsModule} from '@angular/forms';
import { ConectListComponent } from './conect-list/conect-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SafeUrlPipe } from './safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ConectsComponent,
    ConectListHeaderComponent,
    ConectListComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule]
})
export class AppModule { }

