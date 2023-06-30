export interface CurrencyResponse {
    compra: number;
    venta: number;
    fecha: string;
    variacion: string;
    classVariacion: string;
    valorCierreAnt: number;
}

export interface Currency {
    name: string | undefined,
    label: string | undefined,
    endpoint: string | undefined,
    currencyResponse: CurrencyResponse | null | undefined
}