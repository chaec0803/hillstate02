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
        <p className="mb-10">경기도 부천시 부흥로 258 일산빌딩 5층 샤이닝</p>
        <p className="mb-10">
          사업자 번호: 130-37-46318(등록 2007년) 통신판매업신고:
          제2010-경기부천-924호 상호: 샤이닝 대표: 오상민
        </p>
        <p className="mb-10">
          고객센터: 1544-0634 팩스: 0505-200-6060 이메일: hdweb@hdweb.co.kr
        </p>
        <p>광고대행: (주) 오네스트</p>
      </div>
      <div className={styles.right}>
        <p>Contact Us</p>
        <p>{PHONE_NUMBER}</p>
      </div>
    </div>
  );
}

export default Footer;
