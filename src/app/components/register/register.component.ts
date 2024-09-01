import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };
  
    this.authService.register(userData).subscribe(user => {
      if (user) {
        // Navigate to posts or home after successful registration
        this.router.navigate(['/posts']);
      }
    });
  }
  
}
