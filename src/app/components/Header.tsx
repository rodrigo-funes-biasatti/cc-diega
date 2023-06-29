'use client'

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Currency } from '../types/Currency';
import { TypeOfCurrencys } from '../types/TypeOfCurrencys';
import { USDSalary } from '../constants/USDSalary';
import ListOfChips from './ListOfChips';

export default function Header() {

    const [salary, setSalary] = useState<number>(0);
    const [displaySalary, setDisplaySalary] = useState('');
    const [currencys, setCurrencys] = useState<Currency[]>([]);
    
    const linkedinProfile = 'https://www.linkedin.com/in/canepadiego/'

    useEffect(() => {
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(res => res.json())
            .then(data => {
                setCurrencys(data);
            })
            .catch(() => { throw new Error('Error while fetching') });
    }, []);

    useEffect(() => {
        const currency: Currency | undefined = currencys.find(currency => currency.casa.nombre === TypeOfCurrencys.DOLAR_BLUE);
        console.log({ currencys, currency });
        if (currency) {
            setSalary(parseFloat(currency?.casa.venta) * USDSalary)
        };
    }, [currencys]);

    useEffect(() => {
        setDisplaySalary(new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(salary))
    }, [salary]);

    const handleClickButton = () => {
        console.log("Click on button");
    }

    return (
        <section className={styles.section}>
            <div className='flex justify-center m-10'>
                <p className='text-3xl font-sans'>En este momento, el sueldo de la <a className='underline' href={linkedinProfile}><strong>Diega</strong></a> es de:</p>
            </div>
            <div className='flex justify-center '>
                <p className='text-green-500 text-5xl'>
                    <strong>
                        ≈ {displaySalary} ARS
                    </strong>
                </p>
            </div>
            <div className='m-10'>
                <ListOfChips onClickButton={handleClickButton} />
            </div>
        </section>
    );
}