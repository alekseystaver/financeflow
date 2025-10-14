import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Dashboard</h2>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Доходы</h3>
          <p className={styles.income}>0 ₽</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Расходы</h3>
          <p className={styles.expense}>0 ₽</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Баланс</h3>
          <p className={styles.balance}>0 ₽</p>
        </div>
        <p>Здесь скоро появятся транзакции</p>
      </div>
    </div>
  );
}
