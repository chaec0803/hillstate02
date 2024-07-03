import bg from 'assets/images/premium_background.svg';
import styles from './PremiumInfo.module.css';

function PremiumInfo({ info }) {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <p className={styles.num}>{info.num}</p>
        <p className={styles.premium}>{info.premium}</p>
        <p className={styles.title}>{info.title}</p>
        <p className={styles.description}>{info.description}</p>
      </div>
      <div className={styles.right}>
        <img src={bg} alt="background" className={styles.back} />
        <img src={info.img} alt={info.premium} />
      </div>
    </div>
  );
}

export default PremiumInfo;
