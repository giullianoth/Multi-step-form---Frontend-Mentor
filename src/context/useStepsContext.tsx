import { createContext, useContext, useReducer } from "react";
import PersonalInfo from "../components/PersonalInfo";
import SelectPlan from "../components/SelectPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
import Confirm from "../components/Confirm";

interface FormStepsStateValues {
    step: number
    quantity: number
    component: React.ElementType
}

interface StepsContextProps {
    children: React.ReactNode
}

interface StepsContextValues {
    stepState: FormStepsStateValues
    dispatch: (action: number) => void
}

const formStepsState: FormStepsStateValues = {
    step: 1,
    quantity: 4,
    component: PersonalInfo
}

const stepReducer = (state: FormStepsStateValues, action: number) => {
    switch (action) {
        case 1:
            return { ...state, step: action, component: PersonalInfo }

        case 2:
            return { ...state, step: action, component: SelectPlan }

        case 3:
            return { ...state, step: action, component: AddOns }

        case 4:
            return { ...state, step: action, component: Summary }

        case 5:
            return { ...state, step: action, component: Confirm }

        default:
            return state
    }
}

const StepsContext = createContext<StepsContextValues | undefined>(undefined)

export const StepsContextProvider = ({ children }: StepsContextProps) => {
    const [stepState, dispatch] = useReducer<FormStepsStateValues, [action: number]>(stepReducer, formStepsState)

    return (
        <StepsContext.Provider value={{ stepState, dispatch }}>
            {children}
        </StepsContext.Provider>
    )
}

export const useStepsContext = () => {
    const context = useContext(StepsContext)

    if (!context) {
        throw new Error("Out of StepsContext, please use the StepsContextProvider")
    }

    return context
}