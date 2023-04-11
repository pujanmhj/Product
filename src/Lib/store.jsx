import ReducerDetail from "../Common/ReducerDetail";
import { createContext, useReducer,useState } from "react";
const initialState ={
        counter : 0
         }  

         const Store = ({children}) => {
            const [state, dispatch]=useReducer(ReducerDetail,initialState)
            // const [namaste,setNamaste]=useState("Pujan");
           return (
             <CounterContext.Provider value={[state,dispatch]}>
                {children}
             </CounterContext.Provider>
           )
         }
         export const CounterContext = createContext();
        
        //  const [namaste,setNamaste]=useState("Pujan");
         export  default Store;