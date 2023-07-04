'use client'

import { Mate } from "../../types/Mate";
import { useRef } from "react";
import { useMateContext } from "../contexts/MateContext";

export default function ModalForm() {

    const { setMate } = useMateContext();

    const nameRef = useRef<HTMLInputElement>(null);
    const linkedinRef = useRef<HTMLInputElement>(null);
    const salaryRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event?.preventDefault();

        const newMate: Mate = {
            name: nameRef.current?.value,
            linkedinURL: 'https://www.linkedin.com/in/' + linkedinRef.current!.value,
            salaryUSD: +salaryRef.current!.value,
            salaryARS: undefined
        }

        setMate(newMate);
    }

    return (
        <>
            <section className="fixed inset-0 my-10 flex items-center justify-center bg-black bg-opacity-90">
                <div className="md:w-1/3 bg-gray-600 rounded-lg p-6 w-100 transform scale-0 opacity-0 transition-all duration-500 ease-in-out scale-100 opacity-100"> 
                    <h1 className="text-3xl font-semibold mb-4 text-center">Calculador de sueldos</h1>
                    <p className="text-sm mb-4 text-center italic">Calculale el sueldo a tu amigo que labura para el exterior!</p>
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-900 text-sm font-bold mb-2">Nombre</label>
                            <input ref={nameRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Ingrese su nombre" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-900 text-sm font-bold mb-2">Perfil de LinkedIn</label>
                            <input ref={linkedinRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="linkedin" type="text" placeholder="Ingrese su URL de LinkedIn" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-900 text-sm font-bold mb-2">Salario en USD</label>
                            <input ref={salaryRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="salaryUSD" type="number" placeholder="Ingrese su salario en USD" required />
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Calcular 🤑
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>

    );
}
