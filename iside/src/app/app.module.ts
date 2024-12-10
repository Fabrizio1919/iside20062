import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoriaComponent } from './storia/storia/storia.component';
import { ServiziComponent } from './servizi/servizi/servizi.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmailComponent } from './email/email/email.component';
import { LavoraComponent } from './lavora/lavora/lavora.component';
import { HomeComponent } from './home/home/home.component';
import { LavoriComponent } from './lavori/lavori/lavori.component';


@NgModule({
  declarations: [
    AppComponent,
    StoriaComponent,
    ServiziComponent,
    EmailComponent,
    LavoraComponent,
    HomeComponent,
    LavoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
