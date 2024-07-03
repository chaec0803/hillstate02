import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Visual1 from 'assets/images/main_visual_01.jpg';
import Visual2 from 'assets/images/main_visual_02.jpg';
import PHONE_NUMBER from 'const/phoneNum';
import styles from './ImageSlider.module.css';

function ImageSlider() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveWidth: true,
    dots: false,
    fade: true,
  };
  return (
    <div className={styles.box}>
      <Slider {...settings}>
        <div className={styles.main_visual}>
          <img src={Visual1} alt="img1" className={styles.image} />
        </div>
        <div className={styles.main_visual}>
          <img src={Visual2} alt="img1" className={styles.image} />
        </div>
      </Slider>
      <div className={styles.main_visual_text_wrap}>
        <h3 className={`${styles.main_visual_text_title} white`}>
          힐스테이트 가장더퍼스트
        </h3>
        <div className={`${styles.phone} white`}>
          <p className={`${styles.phone_num}`}>
            <a href="tel:1522-9022">{PHONE_NUMBER}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
