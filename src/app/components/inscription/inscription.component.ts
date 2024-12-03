import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

  prenom: string = '';
  nom: string = '';
  cin: string = '';
  password: string = '';
  date_naissance: string = '';

  constructor(private ser:UserService,private router:Router) {}

  register() {
    const user = {
      prenom: this.prenom,
      nom: this.nom,
      cin: this.cin,
      password: this.password,
      date_naissance: this.date_naissance,
      voted: false
    };

    this.ser.addCandidat(user).subscribe(
      (response) => {
        console.log('Registration successful:', response)
        this.router.navigate(["/login"])

      },
      (error) => {
        console.error('Registration failed:', error)
      }
    );
  }

}
