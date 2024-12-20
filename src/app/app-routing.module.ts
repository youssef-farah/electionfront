import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ListeComponent } from './components/liste/liste.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../guard/authgaurd';
import { FavorisComponent } from './components/favoris/favoris.component';
import { DetailsCandidatComponent } from './components/details-candidat/details-candidat.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { adminGuard } from '../guard/admin.guard';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { EditProfilComponent } from './components/edit-profil/edit-profil.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },

  { path: 'adminlogin', component: LoginAdminComponent },
  { path: 'admin', component: DashboardComponent ,canActivate: [adminGuard]},
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],  
    children: [
      { path: 'liste', component: ListeComponent },
      { path: 'liste/:id', component: DetailsCandidatComponent },
      { path: 'favoris', component: FavorisComponent },
      { path: 'numbers', component: NumbersComponent },
      { path: 'profil', component: EditProfilComponent },

      { path: '', redirectTo: 'liste', pathMatch: 'full' }
       // Default child route
    ]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main/favoris', pathMatch: 'full' },
  

];

  // Redirect to login page by default
  //{ path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root to login
  
  // Optional: Redirect any unknown route to login
   // Catch-all route

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
