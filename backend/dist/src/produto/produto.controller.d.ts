import { Produto } from 'src/core';
import { ProdutoPrisma } from './produto.prisma';
export declare class ProdutoController {
    readonly repo: ProdutoPrisma;
    constructor(repo: ProdutoPrisma);
    salvarProduto(produto: Produto): Promise<void>;
    obterProdutos(): Promise<Produto[]>;
    obterProdutoPorId(id: string): Promise<Produto | null>;
    excluirProduto(id: string): Promise<void>;
}
