import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {CategoryBarComponent} from "./components/category-bar/category-bar.component";
import Produto, {CategoriaProduto} from "../../shared/models/produto.model";
import {NgForOf} from "@angular/common";
import {ProdutoCardItemComponent} from "./components/produto-card-item/produto-card-item.component";
import {FiltroProdutoService} from "../../shared/services/filtro-produto/filtro-produto.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [NavbarComponent, CategoryBarComponent, NgForOf, ProdutoCardItemComponent]
})
export class HomePageComponent implements OnInit {

  private readonly produtos: Produto[] = [
    {
      foto: '/assets/images/bola_1.webp',
      nome: 'Bola de Futebol Campo Adidas UEFA Champions League - Branco+Roxo\n',
      nota: 4,
      percentualDesconto: 30,
      preco: 259.90,
      precoDesconto: 222.21,
      categoria: CategoriaProduto.BOLAS
    },
    {
      foto: '/assets/images/cone_com_furo_1.png',
      nome: '10 Cones com 5 Barreiras e Sinalizador',
      nota: 5,
      percentualDesconto: 20,
      preco: 99.99,
      precoDesconto: 79.99,
      categoria: CategoriaProduto.CONES,
    },
    {
      foto: '/assets/images/rede_1.webp',
      nome: 'Rede de Futebol Campo Master Fio 4mm Nylon Sem Nó',
      nota: 4,
      percentualDesconto: 30,
      preco: 459.90,
      precoDesconto: 321.30,
      categoria: CategoriaProduto.REDES,
    },
    {
      foto: '/assets/images/whey_1.webp',
      nome: 'Whey Protein Integral Médica Sabor Baunilha',
      nota: 3,
      percentualDesconto: 30,
      preco: 89.90,
      precoDesconto: 59.90,
      categoria: CategoriaProduto.SUPLEMENTOS
    },
  ];

  produtosFiltrados: Produto[] = [];

  constructor(private filtroProdutoService: FiltroProdutoService) {
  }

  ngOnInit() {
    this.produtosFiltrados = [...this.produtos];

    this.filtroProdutoService.filtroProduto$.subscribe((valorFiltro: string) => {
      this.filtrarProdutos(valorFiltro);
    });
  }

  filtrarProdutos(valorFiltro: string) {
    // Verifique se o valor do filtro está vazio
    if (!valorFiltro) {
      this.produtosFiltrados = this.produtos; // Nenhum filtro, mostrar todos os produtos
      return;
    }

    this.produtosFiltrados = this.produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(valorFiltro.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(valorFiltro.toLowerCase())
    );
  }
}
