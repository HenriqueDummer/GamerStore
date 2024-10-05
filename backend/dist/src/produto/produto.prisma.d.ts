import { Produto } from 'src/core';
import { PrismaProvider } from 'src/db/prisma.provider';
export declare class ProdutoPrisma {
    readonly prisma: PrismaProvider;
    constructor(prisma: PrismaProvider);
    salvar(produto: Produto): Promise<void>;
    obter(): Promise<Produto[]>;
    obterPorId(id: number): Promise<Produto | null>;
    excluir(id: number): Promise<void>;
}
