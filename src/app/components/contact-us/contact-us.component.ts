import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [NgbCollapseModule],
  standalone:true
})
export class ContactUsComponent {
  public isCollapsed = false;
}
