import React,{useState, createContext} from "react";

export const DataContext = createContext();

export const DataProvider =({ children })=>{

    const [theme, setTheme]=useState("Ligth");

    const vars = {
        theme,
        changeTheme:(them)=>{
            setTheme(them);
        }
    }
    
    return <DataContext.Provider value={vars}> { children } </DataContext.Provider>
}


