import { CalcularParcelamento } from "@/core";

export default function useParcelamento(valor: number, quantidade: number = 1) {
    const parcelamento = new CalcularParcelamento().executar(valor, quantidade)
    return parcelamento
}