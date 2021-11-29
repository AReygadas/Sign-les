import React,{useState, createContext} from "react";

export const DataContext = createContext();

export const DataProvider =({ children })=>{
    const [SideB, setSideB]=useState(false);
    const [theme, setTheme]=useState("Ligth");
    const [Auth, setAuth] =useState(true);

    const vars = {
        Auth,
        changeAuth:()=>{
            setAuth(!Auth);
        },
        theme,
        changeTheme:(them)=>{
            setTheme(them);
        },
        SideB,
        changeSideB:()=>{
            setSideB(!SideB);
        }
    }
    
    return <DataContext.Provider value={vars}> { children } </DataContext.Provider>
}


