import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../../../../services/authent.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {


  constructor(
    private authService: AuthentService,
    private router: Router
  ) {}


  login(cin:string,pwd:string): void {
    this.authService.loginAdmin(cin,pwd).subscribe(
      response => {
        localStorage.setItem('stateElectionUser', "connectedAdmin")
        this.router.navigate(['/admin']);
      },
      error => {
        console.log('Login failed:', error); 
      }
    );
  }

}
