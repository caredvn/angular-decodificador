import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeAreaComponent } from './components/code-area/code-area.component';
import { DecodeAreaComponent } from './components/decode-area/decode-area.component';
import { InfoComponent } from './components/info/info.component';
import { WarningComponent } from './components/warning/warning.component';

import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeAreaComponent,
    DecodeAreaComponent,
    InfoComponent,
    WarningComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
