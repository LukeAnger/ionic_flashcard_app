import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { counterReducer, initialCounterState } from "../reducers/counterReducer";
import { CounterActions } from "../actions/counterActions";

// Define the shape of the context
interface StoreContextType {
    state: typeof initialCounterState;
    dispatch: React.Dispatch<CounterActions>;
}

// Create the StoreContext
export const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Custom hook to access the store
export const useStore = (): StoreContextType => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
};

// Define props for the provider
type StoreProviderProps = {
    children?: ReactNode;
};

// StoreProvider component
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialCounterState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
