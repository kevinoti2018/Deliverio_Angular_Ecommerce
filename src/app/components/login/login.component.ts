import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/Interfaces/Interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  users:LoginUser[]=[]
  constructor(private fb:FormBuilder,private userService:UserService){}
  ngOnInit(): void {
   this.loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required]
  })

  }
  submit(){
    console.log(this.loginForm.value);
    this.userService.loginUser(this.loginForm.value)
    
  }
}
