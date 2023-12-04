import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-logo',
  standalone: true,
  imports: [],
  templateUrl: './app-logo.component.html',
  styleUrl: './app-logo.component.scss'
})
export class AppLogoComponent {

  constructor(private router: Router) {
  }

  redirectToStart(): void {
    this.router.navigate(['login']);
  }
}
