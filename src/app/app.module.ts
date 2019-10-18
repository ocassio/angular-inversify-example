import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import servicesContainer from "../core/services/services.container";
import { MessagerService, MessagerServiceType } from "../core/services/messager/messager.service.api";

import { AppComponent } from './app.component';
import { Container } from 'inversify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: Container,
      useValue: servicesContainer
    },
    {
      provide: MessagerService,
      deps: [Container],
      useFactory: (container: Container) => container.get(MessagerServiceType)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
