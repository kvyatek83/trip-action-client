import { Component } from '@angular/core';
import { ClientOptionsService } from './client-options/services/client-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users$ = this.clientOptionsService.users$;

  constructor(private clientOptionsService: ClientOptionsService) {}
}
