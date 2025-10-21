import React, { useState } from 'react'
import styles from "./TransactionForm.module.css"

const TransactionForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(1);
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedTitle = (title || "").trim() || "Без названия";
    const normalizedAmount = Math.max(1, Math.floor(Number(amount) || 0));

    if (typeof onAdd === "function") {
      onAdd({ title: normalizedTitle, amount: normalizedAmount, type });
    }

    setTitle("");
    setAmount(1);
    setType("expense");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          className={styles.input}
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Сумма"
          type="number"
          min="1"
          step="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className={styles.select}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Расход</option>
          <option value="income">Доход</option>
        </select>
      </div>
      <div className={styles.actions}>
        <button className={styles.addButton} type="submit">Добавить</button>
      </div>
    </form>
  )
}

export default TransactionForm
