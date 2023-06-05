import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogUserSuccess, LoginUser, ResetUser, User, UserSuccess } from 'src/Interfaces/Interfaces';

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
  
  loginUser(newUser:LoginUser):Observable<LogUserSuccess>{
    return this.httpClient.post<LogUserSuccess>(`${this.baseUrl}/loginuser`,newUser)
  }

  
  createUser(newUser:User):Observable<UserSuccess>{
    return this.httpClient.post<UserSuccess>(`${this.baseUrl}/adduser`,newUser)
  }
  resetUser(resetUser:ResetUser):Observable<LogUserSuccess>{
    return this.httpClient.put<LogUserSuccess>(`${this.baseUrl}/reset`,resetUser)
  }
}
