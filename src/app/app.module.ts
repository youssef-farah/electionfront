import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvbarComponent } from './components/nvbar/nvbar.component';
import { ListeComponent } from './components/liste/liste.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavorisComponent } from './components/favoris/favoris.component';
import { DetailsCandidatComponent } from './components/details-candidat/details-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    ListeComponent,
    LoginComponent,
    MainComponent,
    FavorisComponent,
    DetailsCandidatComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
