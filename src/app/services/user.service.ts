import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser, User } from 'src/Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:LoginUser[]=[]
  constructor(private httpClient: HttpClient) { }
  private baseUrl ='http://localhost:5000/users'
  getUser(){
    return this.users
  }
  
  loginUser(newUser:LoginUser):Observable<LoginUser>{
    return this.httpClient.post<LoginUser>(`${this.baseUrl}/loginuser`,newUser)
  }

  
  createUser(newUser:User):Observable<User>{
    return this.httpClient.post<User>(`${this.baseUrl}/adduser`,newUser)
  }
}
