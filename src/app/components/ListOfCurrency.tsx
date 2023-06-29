'use client'

import styles from './ListOfCurrency.module.css'

export default function ListOfCurrencys() {
    return (
        <section className='flex justify-center border-solid border-2 border-gray-100 rounded max-w-3xl my-10'>
            <div className='py-10 px-5'><iframe className={styles.cotizaciones} src="https://dolarhoy.com/i/cotizaciones/dolar-blue"></iframe></div>
            <div className='py-10 px-5'><iframe className={styles.cotizaciones} src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"></iframe></div>
        </section>
    )
}