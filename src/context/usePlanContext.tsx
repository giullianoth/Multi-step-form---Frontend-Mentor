import React, { createContext, useContext, useState } from "react";
import type { PlanDetailsInterface } from "../interfaces/Plan";

interface PlanContextProps {
    children: React.ReactNode
}

interface PlanContextValues {
    data: PlanDetailsInterface
    setData: (values: PlanDetailsInterface) => void
}

const PlanContext = createContext<PlanContextValues | undefined>(undefined)

export const PlanContextProvider = ({ children }: PlanContextProps) => {
    const [data, setData] = useState<PlanDetailsInterface>({})

    const handleSetData = (values: PlanDetailsInterface) => {
        setData({ ...data, ...values })
    }

    return (
        <PlanContext.Provider value={{ data, setData: handleSetData }}>
            {children}
        </PlanContext.Provider>
    )
}

export const usePlanContext = () => {
    const context = useContext(PlanContext)

    if (!context) {
        throw new Error("Out of PlanContext, please use the PlanContextProvider")
    }

    return context
}