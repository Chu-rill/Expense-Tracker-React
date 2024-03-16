// import React from "react";
import Balance from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./styles.css";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
// 10.45
