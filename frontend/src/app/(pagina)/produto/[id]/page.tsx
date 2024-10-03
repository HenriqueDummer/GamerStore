"use client";

import { Produto } from "@/core";
import useProdutos from "@/data/hooks/useProdutos";
import { useEffect, useState } from "react";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const { obterProdutoPorId } = useProdutos();
  const [produto, setProduto] = useState<Produto | null>(null)

  useEffect(() => {
    obterProdutoPorId(id).then(setProduto)
  }, [id, obterProdutoPorId])

  return produto ? (
    <div>{produto?.nome}</div>
  ) : (
    <div>Produto não encontrado</div>
  );
}
