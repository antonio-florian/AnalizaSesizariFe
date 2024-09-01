import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';  // To display an error message

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.email.trim() && this.password.trim()) {
      this.authService.login(this.email, this.password).subscribe(
        user => {
          if (user) {
            // Store user info (like token) if needed
            localStorage.setItem('user', JSON.stringify(user)); // Example for storing the user
            // Navigate to the posts or home page after successful login
            this.router.navigate(['/posts']);
          } else {
            this.errorMessage = 'Invalid login credentials'; // Display an error if login fails
          }
        },
        error => {
          this.errorMessage = 'Login failed. Please try again later.';
        }
      );
    } else {
      this.errorMessage = 'Please enter both email and password';
    }
  }
}
