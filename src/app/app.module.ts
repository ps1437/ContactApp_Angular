import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContactBook } from './phonebook/phonebook.component';
import { ContactService } from './phonebook/contactService'
@NgModule({
  declarations: [
    AppComponent,
    ContactBook],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
 

})
export class AppModule { }
