import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Visual1 from 'assets/images/main_visual_01.jpg';
import Visual2 from 'assets/images/main_visual_02.jpg';
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
    <Slider {...settings}>
      <div className={styles.main_visual}>
        <img src={Visual1} alt="img1" className={styles.image} />
      </div>
      <div className={styles.main_visual}>
        <img src={Visual2} alt="img1" className={styles.image} />
      </div>
    </Slider>
  );
}

export default ImageSlider;
