import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent // Automatically injected when created through command - ng generate component heroes
  ],
  imports: [
    BrowserModule,
    FormsModule // To use ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
