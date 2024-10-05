'use client'
import { Produto } from "@gstore/core"
import { useCallback, useEffect, useState } from "react"


export default function useProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function obterProdutos(): Promise<Produto[]> {
        const res = await fetch("http://localhost:3003/produtos")
        const produtos = await res.json()

        return produtos
    }

    const obterProdutoPorId = useCallback(async function obterProdutoPorId(id: number): Promise<Produto> {
        const res = await fetch("http://localhost:3003/produtos/" + id)
        const produto = await res.json()

        return produto
    }, [])

    useEffect(() => {
        obterProdutos().then(setProdutos)
    }, [])

    return {
        produtos,
        obterProdutoPorId
    }
}