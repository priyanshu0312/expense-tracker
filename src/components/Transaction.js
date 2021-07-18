import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

const Transaction = ({ transaction }) => {
  const { removeItem } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${transaction.amount}
        </span>
        <button
          className="delete-btn"
          onClick={() => removeItem(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
