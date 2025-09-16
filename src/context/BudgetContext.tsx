import { useReducer, createContext, type ReactNode } from "react"
import type {BudgetActions, BudgetState} from "../reducers/budget-reducer"
import  {budgetReducer, initialState} from "../reducers/budget-reducer"


type BudgetContextProps = {
    state: BudgetState,
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    chldren: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)

export const BudgetProvider = ({children}: BudgetProviderProps) => {
     const [state, dispatch] = useReducer( budgetReducer, initialState)
    return(
        <BudgetContext.Provider
            value={{state, dispatch}}
        >
            {children}
        </BudgetContext.Provider>
    )
}