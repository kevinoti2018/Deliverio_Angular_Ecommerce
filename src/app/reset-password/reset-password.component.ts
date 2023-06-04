import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginUser } from 'src/Interfaces/Interfaces';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private Route:Router,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
  }
  submit(): void {
    if (this.resetForm.valid) {
      const loginUser: LoginUser = {
        email: this.resetForm.get('email')?.value,
        password: this.resetForm.get('password')?.value
      };

      this.userService.loginUser(loginUser).subscribe(
      
        (response) => {
          console.log('User logged in:', response);
          this.authService.login(response)
          this.Route.navigateByUrl('')
        },
        (error:any) => {
          console.log(error.error);
         
        }
      );
    }
  }

}
