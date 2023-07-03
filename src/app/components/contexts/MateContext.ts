import { Mate } from "@/app/types/Mate";
import { createContext, useContext } from "react";

export interface ContextMateType {
    mate: Mate | undefined;
    setMate: (mate: Mate) => void;
}

export const MateContext = createContext<ContextMateType>({
    mate: {} as Mate,
    setMate: () => { }
});

export const useMateContext = () => useContext(MateContext);