import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: localStorage.getItem("transactions")
    ? JSON.parse(localStorage.getItem("transactions"))
    : [],
};

//create Context

export const GlobalContext = createContext(initialState);
//provider Component

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  // function deleteTransaction(id) {
  //   dispatch({
  //     type:'DELETE_TRANSACTION',
  //     payload:id,
  //   })
  // }

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state]);
  return (
    <div>
      <GlobalContext.Provider
        value={{ transactions: state.transactions, removeItem, addTransaction }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalProvider;
