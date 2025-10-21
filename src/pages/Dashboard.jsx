import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
export default function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  },[transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now(),
      ...transaction,
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  } 

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  const income = transactions.filter((t) => t.type === "income").reduce((s, t) => s + Number(t.amount || 0), 0);
  const expense = transactions.filter((t) => t.type === "expense").reduce((s, t) => s + Number(t.amount || 0), 0);

  const balance = income - expense;

  // Debug logging
  console.log('Transactions:', transactions);
  console.log('Income:', income, 'Expense:', expense, 'Balance:', balance);

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Dashboard</h2>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Доходы</h3>
          <p className={styles.income}>{income}</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Расходы</h3>
          <p className={styles.expense}>{expense}</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Баланс</h3>
          <p className={styles.balance}>{balance}</p>
        </div>
         <TransactionForm onAdd={addTransaction} />
      </div>
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}
