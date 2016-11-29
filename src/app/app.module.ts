import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginForm} from './app.component';
import {routing} from './app-routing.module'

import { ReactiveFormsModule } from '@angular/forms';
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";

@NgModule({

  declarations: [LoginForm, AboutComponent, InternshipsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      ReactiveFormsModule,
      routing

  ],
  providers: [],
  bootstrap: [LoginForm]
})
export class AppModule { }
