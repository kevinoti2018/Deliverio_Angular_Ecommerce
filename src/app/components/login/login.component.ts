import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LoginUser } from 'src/Interfaces/Interfaces';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private Route:Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.loginForm.valid) {
      const loginUser: LoginUser = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };

      this.userService.loginUser(loginUser).subscribe(
        (response) => {
          console.log('User logged in:', response);
          
          this.Route.navigateByUrl('')
        },
        (error:any) => {
          console.log(error.error);
         
        }
      );
    }
  }
}
