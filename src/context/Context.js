import { createContext, useReducer,useState } from "react";

export const CostContext= createContext()
export const Context=(props)=>{
   
    const [groceryList, setGroceryList] = useState([]);
    
    const [searchitem,setSearchItem]=useState([])
    const [favorites, setFavorites] = useState([]);
   
    return <CostContext.Provider value={{groceryList, setGroceryList,searchitem,setSearchItem,favorites, setFavorites}}>{props.children}</CostContext.Provider>
}
