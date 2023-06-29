'use client'
import { ReactPropTypes } from "react";
import { TypeOfCurrencys } from "../types/TypeOfCurrencys"
import styles from './ListOfChips.module.css'

export default function ListOfChips({ onClickButton }: { onClickButton: () => void }) {
    const typesKeys: string[] = Object.values(TypeOfCurrencys);

    return (
        <section className="flex justify-center mt-10">
            {typesKeys.map((key: string) => (
                <input type="radio" name="currencys" onClick={onClickButton} className="border-solid border-2 border-light-blue-500 px-2 mx-10 rounded-full text-xs italic" id={key} value={key}/>
            ))}
        </section>
    )
}