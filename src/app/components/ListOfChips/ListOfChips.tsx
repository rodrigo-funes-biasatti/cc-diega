'use client'

import { Currency } from "../../types/Currency";
import { TypeOfCurrencys } from '../../constants/TypeOfCurrencys'

export default function ListOfChips({ selectedCurrency: selectedCurrency, onClickButton }: { selectedCurrency?: Currency, onClickButton: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void }) {
    return (
        <ul className="grid w-90 gap-6 md:grid-cols-4">
            {TypeOfCurrencys.map((type: Currency) => (
                <li key={type.name}>
                    <input checked={selectedCurrency?.name === type.name} type="radio" name="hosting" value={type.label} className="hidden peer" readOnly/>
                    <label onClick={onClickButton} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <div className="w-full text-xs font-semibold center">{type.label}</div>
                        </div>
                    </label>
                </li>
            ))}
        </ul>
    )
}