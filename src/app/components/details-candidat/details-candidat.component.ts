import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condidat } from '../../../models/condidat';
import { CondidatService } from '../../../services/condidat.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrl: './details-candidat.component.css'
})
export class DetailsCandidatComponent implements OnInit {
  candidatId: string | undefined;
  public candidat!: Condidat;
  userId: string = localStorage.getItem('userId') || '';
  favoris: string[] = [];
  isFavorited: boolean = false;

  public tab: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private ser1: CondidatService,
    private ser2: UserService
  ) {}

  ngOnInit(): void {
    // Fetch candidate ID from route
    this.route.paramMap.subscribe((params) => {
      this.candidatId = params.get('id')!;
      console.log('Candidat ID:', this.candidatId);

      // Fetch candidate details
      this.ser1.getCandidat(this.candidatId).subscribe((res) => {
        this.candidat = res;

        // After fetching candidat, check if it's in the favorites
        this.checkIfFavorite();
      });
    });

    // Fetch favorites
    this.ser2.getFavoris().subscribe(
      (data) => {
        this.tab = data;

        // After fetching favorites, check if the candidate is in the favorites
        this.checkIfFavorite();
      },
      (error) => {
        console.error('Error fetching favoris:', error);
      }
    );
  }

  checkIfFavorite(): void {
    // Ensure both candidat and favorites are loaded before checking
    if (this.candidat && this.tab.length > 0) {
      this.isFavorited = this.tab.some((favorite) => favorite._id === this.candidat._id);
      console.log('Is Favorite:', this.isFavorited);
    }
  }


  addToFavorites(candidatId: string) {
    this.ser2.addInFavoris(this.userId, candidatId).subscribe({
      next: (response) => {
        this.ngOnInit();
        console.log('Candidat added to favorites', response);
         // Reload favorites to update the UI
      },
      error: (error) => {
        console.error('Error adding candidat to favorites', error);
      },
    });
  }


  vote(candidatId: string) {
    this.ser1.addVote(this.userId, candidatId).subscribe(
      (response) => {
        console.log('Vote added successfully!', response);
        // Optionally navigate to another screen after voting
        
      },
      (error) => {
        console.error('Error adding vote', error);
      }
    );
  }
}