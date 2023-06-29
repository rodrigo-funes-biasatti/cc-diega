export interface Currency {
    casa: CurrencyData;
}

export interface CurrencyData {
    compra: string;
    venta: string;
    agencia: string;
    nombre: string;
    variacion?: string;
    ventaCero?: string;
    decimales?: string;
    mejorCompra?: string;
    mejorVenta?: string;
    fecha?: string;
    recorrido?: string;
    afluencia?: object;
    observaciones?: object;
}