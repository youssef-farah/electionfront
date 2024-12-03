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
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddCandidatsComponent } from './components/admin/add-candidats/add-candidats.component';
import { EditCandidatsComponent } from './components/admin/edit-candidats/edit-candidats.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { NumbersComponent } from './components/numbers/numbers.component';


@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    ListeComponent,
    LoginComponent,
    MainComponent,
    FavorisComponent,
    DetailsCandidatComponent,
    DashboardComponent,
    AddCandidatsComponent,
    EditCandidatsComponent,
    LoginAdminComponent,
    NumbersComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    
  
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
