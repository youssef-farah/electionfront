import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent implements OnInit{
constructor (private serv :UserService){}

tab: any[] = [];

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
;



}
