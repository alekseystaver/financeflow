import React from "react";
import styles from "./TransactionList.module.css";

export default function TransactionItem({ transaction, onDelete }) {
  const { id, title, amount, type } = transaction || {};

  return (
    <li className={styles.item}>
      <div>
        <div className={styles.itemTitle}>{title || "—"}</div>
        <div className={styles.itemType}>{type}</div>
      </div>

      <div className={styles.itemRight}>
        <div className={styles.itemAmount}>
          {type === "income" ? `+${amount} ₽` : `-${amount} ₽`}
        </div>
        <button className={styles.deleteButton} onClick={() => onDelete && onDelete(id)}>
          Удалить
        </button>
      </div>
    </li>
  );
}
