import PARCEL_INFO from 'const/pacelInfo';
import PremiumInfo from 'components/parcel/PremiumInfo';
import styles from './PremiumInfoContainer.module.css';

function PremiumInfoContainer() {
  return (
    <div className={styles.box}>
      {PARCEL_INFO.map((info) => (
        <PremiumInfo key={info.num} info={info} />
      ))}
    </div>
  );
}

export default PremiumInfoContainer;
