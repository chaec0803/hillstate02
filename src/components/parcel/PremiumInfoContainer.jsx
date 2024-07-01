import PARCEL_INFO from 'const/pacelInfo';
import ParcelInfo from 'components/parcel/ParcelInfo';
import styles from './ParcelInfoContainer.module.css';

function ParcelInfoContainer() {
  return (
    <div className={styles.box}>
      {PARCEL_INFO.map((info) => (
        <ParcelInfo key={info.num} info={info} />
      ))}
    </div>
  );
}

export default ParcelInfoContainer;
