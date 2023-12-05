import {Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.scss'
})
export class CategoryBarComponent {

  menuAberto: boolean = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuAberto = false;
    }
  }

  constructor(private elementRef: ElementRef) {
  }
}
