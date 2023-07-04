'use client'

import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import { Currency, CurrencyResponse } from '../../types/Currency';
import ListOfChips from '../../components/ListOfChips/ListOfChips';
import ListOfCurrencys from '../../components/ListOfCurrencys/ListOfCurrency';
import { TypeOfCurrencys } from '../../constants/TypeOfCurrencys';
import { useMateContext } from '../contexts/MateContext';
import { Mate } from '@/app/types/Mate';

export default function Main() {

    const [displaySalary, setDisplaySalary] = useState<string>();
    const [selectedCurrency, setSelectedCurrency] = useState<Currency | undefined>(TypeOfCurrencys.find(c => c.name === 'blue'));
    const { mate, setMate } = useMateContext();

    useEffect(() => {
        const currency: Currency | undefined = TypeOfCurrencys.find(c => c.name === selectedCurrency?.name);
        fetchCurrency(currency);
    }, []);

    const fetchCurrency = (currency: Currency | undefined) => {
        fetch(`https://mercados.ambito.com/${currency?.endpoint}/variacion`)
            .then(res => res.json())
            .then((data: CurrencyResponse) => {
                if (!data) {
                    throw new Error('Data is empty');
                }
                const newCurrency = {...currency, currencyResponse: data as CurrencyResponse} as Currency;
                setSelectedCurrency(newCurrency)
                setNewSalary(newCurrency);
            })
            .catch(() => { throw new Error('Error while fetching') });
    }

    const setNewSalary = (currency: Currency) => {
        const salary = parseFloat(currency?.currencyResponse?.venta || '0') * (mate?.salaryUSD || 0);
        setMate({ ...mate, salaryARS: salary } as Mate)
        setDisplaySalary(new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(salary));
    }

    const handleClickButton = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        const currency = TypeOfCurrencys.find(c => c.label === event.currentTarget.textContent);
        fetchCurrency(currency);
    }

    return (
        <>
            <section className={styles.section}>
                <div className='flex justify-center m-10'>
                    <p className='md:text-3xl text-2xl font-sans'>En este momento, el sueldo de <a target='_blank' className='underline' href={mate?.linkedinURL || ''}><strong>{mate?.name || ''}</strong></a> es de:</p>
                </div>
                <div className='flex justify-center '>
                    <p className='text-green-500 md:text-5xl text-3xl'>
                        <strong>
                            ≈ {displaySalary || 0} ARS
                        </strong>
                    </p>
                </div>
                <div className="flex justify-end text-xs mx-5 md:my-0 my-5">
                    <p className='italic'>({selectedCurrency?.label})</p>
                </div>
            </section>
            <section className={styles.section_chips}>
                <ListOfChips selectedCurrency={selectedCurrency} onClickButton={handleClickButton} />
            </section>
            <section className={`${styles.section_currencys}`}>
                <ListOfCurrencys />
            </section>
        </>
    );
}