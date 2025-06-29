import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.header}>
          <th className={styles.headerCell}>Type</th>
          <th className={styles.headerCell}>Amount</th>
          <th className={styles.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={`${styles.row} ${index % 2 === 0 ? styles.even : styles.odd}`}>
            <td className={styles.cell}>{item.type}</td>
            <td className={styles.cell}>{item.amount}</td>
            <td className={styles.cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
