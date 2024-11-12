import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../../../services/condidat.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit{


  candidats: any[] = [];

  constructor(private candidatService:CondidatService,private router:Router) { }

  ngOnInit(): void {
    this.candidatService.getCandidats().subscribe(
      (data) => {
        this.candidats = data;
        console.log(this.candidats);
      },
      (error) => {
        console.error('Error fetching candidats:', error);
      }
    );
  }


  check(id: string) {
    const targetUrl = `/main/liste/${id}`;
    console.log("Navigating to:", targetUrl);
    this.router.navigate([targetUrl]);
  }
  
  
}
