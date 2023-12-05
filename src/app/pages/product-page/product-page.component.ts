import {Component, } from '@angular/core';
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {CategoryBarComponent} from "./components/category-bar/category-bar.component";
import {NgForOf} from "@angular/common";
import {ProdutoCardItemComponent} from "./components/produto-card-item/produto-card-item.component";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  standalone: true,
  imports: [NavbarComponent, CategoryBarComponent, NgForOf, ProdutoCardItemComponent]
})
export class ProductPageComponent {

}
