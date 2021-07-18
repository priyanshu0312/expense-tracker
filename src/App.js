import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import Addtransactions from "./components/Addtransactions";
import GlobalProvider from "./context/Globalstate";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <Addtransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
