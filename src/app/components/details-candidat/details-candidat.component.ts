import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condidat } from '../../../models/condidat';
import { CondidatService } from '../../../services/condidat.service';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrl: './details-candidat.component.css'
})
export class DetailsCandidatComponent implements OnInit {
  candidatId: string | undefined;
  public candidat!: Condidat;
  user:User
  userId: string ;
  favoris: string[] = [];
  isFavorited: boolean = false;

  public tab: any[] = [];

  commentForm: FormGroup


  constructor(
    private route: ActivatedRoute,
    private ser1: CondidatService,
    private ser2: UserService, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Fetch candidate ID from route
    this.userId = localStorage.getItem('userId') 
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

    this.ser2.getFavoris().subscribe(
      (data) => {
        this.tab = data;

        this.checkIfFavorite();
      },
      (error) => {
        console.error('Error fetching favoris:', error);
      }
    );

    this.ser2.getCandidat(this.userId).subscribe(data =>{
      this.user=data
    })


    this.commentForm = this.fb.group({
      message: [, Validators.required],
    })
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


  ajouterCommentaire(){
    let  comment = this.commentForm.get('message').value
    console.log(comment)
    this.commentForm.reset()
    this.ser1.addComment(this.candidatId,this.userId,comment).subscribe(data =>{
      console.log(data)
      this.candidat.comments.unshift(data.populatedComment)
    })
  }

  deleteComment(commentId:Number){

    this.ser1.deleteComment(this.candidatId,commentId).subscribe(data =>{
      if (data.deleted){
        this.candidat.comments=this.candidat.comments.filter(c=> c._id != commentId)
      }
    })
  }
}