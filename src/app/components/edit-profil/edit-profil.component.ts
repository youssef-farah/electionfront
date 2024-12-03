import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrl: './edit-profil.component.css'
})
export class EditProfilComponent  implements OnInit {
  userForm: FormGroup;
  userId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    // Initialize the form
    this.userForm = this.fb.group({
      nom: [''],
      prenom: [''],
      cin: [''],
      dateNaissance: ['']
    });
  }

  ngOnInit(): void {
    // Get the user ID from local storage
    this.userId = localStorage.getItem('userId');

    if (this.userId) {
      // Fetch user details
      this.userService.getCandidat(this.userId).subscribe(
        (user: any) => {
          // Populate form fields
          this.userForm.patchValue({
            nom: user.nom,
            prenom: user.prenom,
            cin: user.cin,
            dateNaissance: user.dateNaissance
          });
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }

  onUpdate(): void {
    if (this.userForm.valid) {
      const updatedUser = this.userForm.value;

      if (this.userId) {
        // Call the update method from the service
        this.userService.updateCandidat(this.userId, updatedUser).subscribe(
          () => {
            alert('Profil updated successfully!');
            this.router.navigate(['/profile']); // Redirect to profile page or other page
          },
          (error) => {
            console.error('Error updating user:', error);
            alert('Failed to update profile.');
          }
        );
      }
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}

