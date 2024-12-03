import { Component } from '@angular/core';
import { AuthentService } from '../../../services/authent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cin: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthentService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.cin, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        localStorage.setItem('userId', response.user.id); 
        localStorage.setItem('stateElectionUser', "connectedUser")
        console.log(localStorage.getItem('userId'));
        this.router.navigate(['/main']); 
      },
      error => {
        this.authService.loginAdmin(this.cin, this.password).subscribe(
          response2 => {
            console.log('Login successful:', response2);
            localStorage.setItem('userId', response2.user.id); 
            localStorage.setItem('stateElectionUser', "connectedUser")
            console.log(localStorage.getItem('userId'));
            this.router.navigate(['/main']); 
          },
          error => {
            console.log('Login failed:', error); 
            this.errorMessage = error.error.message || 'Login failed';
          }
        );
      }
    );
  }
}
