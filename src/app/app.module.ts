import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbbpmShellComponent } from './dbcoe/shell/dbbpm-shell/dbbpm-shell/dbbpm-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    DbbpmShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
