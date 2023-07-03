import { useContext, useEffect } from 'react';
import Main from '../Main/Main';
import { MateContext, useMateContext } from '../contexts/MateContext';
import ModalForm from '../ModalForm/ModalForm';

export default function Header() {

    const {mate, setMate} = useMateContext();

    return (
        <>
            <Main />
            {!mate ? <ModalForm /> : ''}
        </>
    );
}