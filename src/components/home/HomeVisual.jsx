import ImageSlider from 'components/home/ImageSlider';
import HomeBanner from 'components/home/HomeBanner';
import styles from './HomeVisual.module.css';

function HomeVisual() {
  return (
    <div className={`${styles.main_visual_wrap} home`}>
      <ImageSlider />

      <HomeBanner />
    </div>
  );
}

export default HomeVisual;
