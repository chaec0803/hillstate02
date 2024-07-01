import styles from './SmartCard.module.css';

function SmartCard({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_inner}>
        <div className={styles.card_img}>
          <img alt="card" src={card.img} />
        </div>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    </div>
  );
}

export default SmartCard;
