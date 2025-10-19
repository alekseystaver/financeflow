import React from "react";
import TransactionItem from "./TransactionItem";
import styles from "./TransactionList.module.css";

export default function TransactionList({ transactions = [], onDelete }) {
  if (!transactions.length) {
    return <div className={styles.empty}>Транзакций пока нет</div>;
  }

  return (
    <ul className={styles.list}>
      {transactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
      ))}
    </ul>
  );
}
