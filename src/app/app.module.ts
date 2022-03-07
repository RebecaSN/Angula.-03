import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MaterialModule } from './material.module'
import { FormsModule } from '@angular/forms';
//import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    //InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
