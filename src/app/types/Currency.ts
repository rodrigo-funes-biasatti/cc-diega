export interface CurrencyResponse {
    compra: string;
    venta: string;
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