import BANNER from 'const/banner';
import PHONE_NUMBER from 'const/phoneNum';
import styles from './HomeBanner.module.css';

function HomeBanner() {
  return (
    <div className={styles.sub_content}>
      <div className={styles.counseling}>
        <p>
          모델하우스
          <br />
          방문예약
        </p>
        <p>
          <a className="white" href="tel:1522-9022">
            {PHONE_NUMBER}
          </a>
        </p>
      </div>
      {BANNER.map((item) => (
        <div className={styles.step_box} key={item.num}>
          <img alt="이미지" src={item.image} />
          <div className={styles.step}>
            <p className={styles.num}>{item.num}</p>
            <p className={styles.title}>{item.title}</p>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeBanner;
