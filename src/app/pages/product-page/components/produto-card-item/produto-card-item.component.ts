import {Component, Input, OnInit} from '@angular/core';
import Produto from "../../../../shared/models/produto.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-produto-card-item',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './produto-card-item.component.html',
  styleUrl: './produto-card-item.component.scss'
})
export class ProdutoCardItemComponent implements OnInit {
  @Input() produto: Produto = undefined as any;
  estrelas: number[] = [];

  ngOnInit():void {
    this.estrelas = new Array(this.produto.nota);
  }
}
