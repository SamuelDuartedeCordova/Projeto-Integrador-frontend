import {Component, ElementRef, HostListener} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-dropdown',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './login-dropdown.component.html',
  styleUrl: './login-dropdown.component.scss'
})
export class LoginDropdownComponent {
  menuAberto: boolean = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuAberto = false;
    }
  }

  constructor(private elementRef: ElementRef, private router: Router) {
  }

  irPara(rota: string): void {
    this.router.navigate([rota]);
  }
}
