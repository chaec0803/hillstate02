import logo from 'assets/images/logo.svg';
import PHONE_NUMBER from 'const/phoneNum';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <h3 className="mb-20">
          <img src={logo} alt="로고" />
        </h3>
        <p>광고대행: (주) 오네스트</p>
      </div>
      <div className={styles.right}>
        <p>Contact Us</p>
        <p>
          <a href="tel:1522-9022">{PHONE_NUMBER}</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
