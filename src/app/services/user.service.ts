import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from 'src/Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:LoginUser[]=[]
  constructor(private httpClient: HttpClient) { }

  getUser(){
    return this.users
  }
  
  loginUser(newUser:LoginUser){
    return this.users.push(newUser)
  }
}
