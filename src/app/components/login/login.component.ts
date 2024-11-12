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
        localStorage.setItem('userId', response.user.id); // Log response
        console.log(localStorage.getItem('userId'));
        this.router.navigate(['/main']); // Redirect to the main component
      },
      error => {
        console.log('Login failed:', error); // Log error
        this.errorMessage = error.error.message || 'Login failed';
      }
    );
  }
}
