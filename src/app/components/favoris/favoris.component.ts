import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent implements OnInit{
constructor (private serv :UserService,private router:Router){}

tab: any[] = [];
userId: string =localStorage.getItem('userId')|| '';

ngOnInit(): void {


   this.serv.getFavoris().subscribe(
      (data) => {
        this.tab = data;
        console.log(this.tab);
      },
      (error) => {
        console.error('Error fetching candidats:', error);
      }
    );
  }

  editFavorites(candidatId: string) {
    this.serv.removeFromFavoris(this.userId, candidatId).subscribe({
      next: (response) => {
        console.log('Candidat added to favorites', response);
        this.ngOnInit();
        // Optionally, you can display a success message or update the UI here
      },
      error: (error) => {
        console.error('Error adding candidat to favorites', error);
        // Optionally, display an error message here
      }
    });
  }


  check(id: string) {
    const targetUrl = `/main/liste/${id}`;
    console.log("Navigating to:", targetUrl);
    this.router.navigate([targetUrl]);
  }
  

}
