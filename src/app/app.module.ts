import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { CardComponent } from './card/card.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskModule.forRoot(options)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
