import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log("data", transactions);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
        {transactions.length === 0 ? <div>No Transactions Yet!</div> : ""}
      </ul>
    </div>
  );
};

export default TransactionList;
