import { Mate } from "@/app/types/Mate";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface ContextMateType {
    mate: Mate | undefined;
    setMate:Dispatch<SetStateAction<Mate | undefined>>;
}

export const MateContext = createContext<ContextMateType>({
    mate: {} as Mate,
    setMate: () => {}
});

export const useMateContext = () => useContext(MateContext);