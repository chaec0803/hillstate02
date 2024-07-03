import styles from 'components/Navigator.module.css';
import { Link } from 'react-router-dom';
import tab from 'assets/images/tab.svg';
import tabBlack from 'assets/images/tab_black.svg';
import phone from 'assets/images/phone.svg';
import phoneB from 'assets/images/phone_black.svg';
import mobileStore from '../store/mobileStore';

function MobileNavigator({ isHome = false }) {
  const toggleMobileTab = mobileStore((state) => state.toggleMobileTab);

  return (
    <div className={`${styles.header} ${!isHome ? styles.not_home : ''}`}>
      <div className={styles.header_wrap}>
        <h1 className={styles.logo}>
          <Link to="/">
            <p>힐스테이트 가장더퍼스트</p>
          </Link>
        </h1>
        <div className={`${styles.light} ${styles.mobile}`}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <a href="tel:1522-9022">
            <img
              src={isHome ? phone : phoneB}
              alt="phone"
              width="30px"
              height="30px"
            />
          </a>
          <img
            src={isHome ? tab : tabBlack}
            alt="tab"
            onClick={() => {
              toggleMobileTab();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MobileNavigator;
