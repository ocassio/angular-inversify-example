import { Component, Inject } from '@angular/core';
import { MessagerServiceType, MessagerService } from 'src/core/services/messager/messager.service.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(
    messagerService: MessagerService
  ) {
    this.title = messagerService.getMessage();
  }
}
