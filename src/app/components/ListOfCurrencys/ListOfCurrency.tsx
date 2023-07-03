'use client'

import styles from './ListOfCurrency.module.css'

export default function ListOfCurrencys() {
    return (
        <>
            <div><iframe className={styles.cotizaciones} src="https://dolarhoy.com/i/cotizaciones/dolar-blue"></iframe></div>
            <div><iframe className={styles.cotizaciones} src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"></iframe></div>
        </>
    )
}