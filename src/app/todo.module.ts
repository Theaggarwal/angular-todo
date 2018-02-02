import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TempComponent } from './temp.component';
import { Temp2Component } from './temp2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TodoComponent, TempComponent, Temp2Component],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
