'use client'

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Currency, CurrencyResponse } from '../types/Currency';
import { USDSalary } from '../constants/USDSalary';
import ListOfChips from './ListOfChips';
import Link from 'next/link';
import ListOfCurrencys from './ListOfCurrency';
import { TypeOfCurrencys } from '../constants/TypeOfCurrencys';

export default function Header() {

    const [salary, setSalary] = useState<number>(0);
    const [displaySalary, setDisplaySalary] = useState('');
    const [currentCurrency, setCurrentCurrency] = useState<Currency | undefined>(TypeOfCurrencys.find(c => c.name === 'blue'));

    const linkedinProfile = 'https://www.linkedin.com/in/canepadiego/';

    useEffect(() => {
        let currency: Currency | undefined = TypeOfCurrencys.find(c => c.name === currentCurrency?.name);
        fetchCurrency(currency);
    }, []);

    useEffect(() => {
        setDisplaySalary(new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(salary))
    }, [salary]);

    const fetchCurrency = (currency: Currency | undefined) => {
        fetch(`https://mercados.ambito.com/${currency?.endpoint}/variacion`)
            .then(res => res.json())
            .then((data: CurrencyResponse) => {
                if (!data) {
                    throw new Error('Data is empty');
                }
                currency = { ...currency, currencyResponse: data } as Currency;
                const newSalary = parseFloat(currency.currencyResponse?.venta?.toString() || '') * USDSalary;

                setSalary(newSalary);
                console.log('Ejecuto fetch')
                setCurrentCurrency(currency);
            })
            .catch(() => { throw new Error('Error while fetching') });
    }

    const handleClickButton = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        const currency = TypeOfCurrencys.find(c => c.label === event.currentTarget.textContent);
        fetchCurrency(currency);
        console.log("Click on button: " + event.currentTarget.textContent);
    }

    return (
        <>
            <section className={styles.section}>
                <div className='flex justify-center m-10'>
                    <p className='text-3xl font-sans'>En este momento, el sueldo de la <Link className='underline' href={linkedinProfile}><strong>Diega</strong></Link> es de:</p>
                </div>
                <div className='flex justify-center '>
                    <p className='text-green-500 text-5xl'>
                        <strong>
                            ≈ {displaySalary} ARS
                        </strong>
                    </p>
                </div>
                <div className="flex justify-end text-xs mx-5 my-0">
                    <p className='italic'>({currentCurrency?.label})</p>
                </div>
            </section>
            <section className={styles.section_chips}>
                <ListOfChips currentCurrency={currentCurrency} onClickButton={handleClickButton} />
            </section>
            <section className={styles.section_chips}>
                <ListOfCurrencys />
            </section>
        </>
    );
}