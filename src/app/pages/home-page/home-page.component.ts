import {Component} from '@angular/core';
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {CategoryBarComponent} from "./components/category-bar/category-bar.component";
import Produto from "../../shared/models/produto.model";
import {NgForOf} from "@angular/common";
import {ProdutoCardItemComponent} from "./components/produto-card-item/produto-card-item.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [NavbarComponent, CategoryBarComponent, NgForOf, ProdutoCardItemComponent]
})
export class HomePageComponent {
  searchTerm: string = ''; // Use ngModel ou [(ngModel)] no modelo para vincular a essa propriedade
  produtos: Produto[] = [
    {
      foto: '/assets/images/bola_1.png',
      nome: 'Bola de Futebol de Campo Penalty Bravo',
      nota: 1,
      percentualDesconto: 30,
      preco: 119.90,
      precoDesconto: 83.93
    },
    {
      foto: '/assets/images/cone_com_furo_1.png',
      nome: '10 Cones com 5 Barreiras e Sinalizador',
      nota: 5,
      percentualDesconto: 20,
      preco: 99.99,
      precoDesconto: 79.99
    },
    {
      foto: '/assets/images/rede_1.png',
      nome: 'Rede de Futebol Campo Master Fio 4mm Nylon Sem Nó',
      nota: 1,
      percentualDesconto: 30,
      preco: 459.90,
      precoDesconto: 321.30
    },
  ];

  buscar() {
    // Agora você pode acessar o searchTerm diretamente
    console.log('Buscando por:', this.searchTerm);
    // Implemente sua lógica de pesquisa aqui
  }
}
