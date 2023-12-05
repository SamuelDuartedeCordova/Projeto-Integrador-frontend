export enum CategoriaProduto {
  BOLAS = 'bolas',
  REDES = 'redes',
  CONES = 'cones',
  SUPLEMENTOS = 'suplementos',
}

export default interface Produto {
  foto: string;
  percentualDesconto: number;
  nome: string;
  nota: number;
  preco: number;
  precoDesconto: number;
  categoria: CategoriaProduto,
}
