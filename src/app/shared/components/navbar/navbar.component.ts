import { Component } from '@angular/core';
import {AppLogoComponent} from "../app-logo/app-logo.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AppLogoComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
