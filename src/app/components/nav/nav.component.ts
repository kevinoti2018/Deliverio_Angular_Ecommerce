import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
 constructor(public authService:AuthService){}
}
