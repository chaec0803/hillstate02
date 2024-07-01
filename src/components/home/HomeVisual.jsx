import ImageSlider from 'components/ImageSlider';
import Call from 'assets/images/call.svg';
import HomeBanner from 'components/HomeBanner';
import styles from './HomeVisual.module.css';

function HomeVisual() {
  return (
    <div className={styles.main_visual_wrap}>
      <ImageSlider />

      <div className={styles.dim} />

      <div className={styles.main_visual_text_wrap}>
        <h3 className={`${styles.main_visual_text_title} white`}>
          힐스테이트 가장더퍼스트
        </h3>
        <p className={styles.flag}>분양중</p>
        <div className={`${styles.phone} white`}>
          <img alt="문의전화번호" className={styles.call_icon} src={Call} />
          <p className={`${styles.phone_num} white`}>042-537-9131</p>
        </div>
      </div>

      <HomeBanner />
    </div>
  );
}

export default HomeVisual;
