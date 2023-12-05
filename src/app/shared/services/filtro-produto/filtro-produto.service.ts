import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FiltroProdutoService {

  filtroProduto$ = new Subject<string>();
}
