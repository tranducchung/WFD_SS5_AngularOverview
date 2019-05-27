import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfilesComponent} from './profiles/profiles.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { ChoseColorComponent } from './chose-color/chose-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    CalculatorComponent,
    FontSizeEditorComponent,
    PetComponent,
    ChoseColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
