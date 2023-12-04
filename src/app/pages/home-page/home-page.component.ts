import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  searchTerm: string = ''; // Use ngModel ou [(ngModel)] no modelo para vincular a essa propriedade

  buscar() {
    // Agora você pode acessar o searchTerm diretamente
    console.log('Buscando por:', this.searchTerm);
    // Implemente sua lógica de pesquisa aqui
  }
}
