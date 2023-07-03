import Main from '../Main/Main';
import { useMateContext } from '../contexts/MateContext';
import ModalForm from '../ModalForm/ModalForm';

export default function Header() {

    const { mate } = useMateContext();

    return (
        <>
            {!mate ? <ModalForm /> : <Main />}
        </>
    );
}