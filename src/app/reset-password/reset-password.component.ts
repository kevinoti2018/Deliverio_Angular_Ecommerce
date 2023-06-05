import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ResetUser } from 'src/Interfaces/Interfaces';
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
      newPassword: ['', Validators.required]
    });
    
  }
  submit(): void {
    console.log('clicked');
    
    
    if (this.resetForm.valid) {
      const resetUser: ResetUser = {
        email: this.resetForm.get('email')?.value,
        newPassword: this.resetForm.get('newPassword')?.value

      };

      this.userService.resetUser(resetUser).subscribe(
      
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
