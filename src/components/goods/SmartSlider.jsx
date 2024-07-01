import Slider from 'react-slick';
import SmartCard from 'components/goods/SmartCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SmartSlider({ title, titleColor, subTitle, items, slidesToShow }) {
  const settings = {
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: false,
    draggable: false,
  };

  return (
    <div
      className="smart_slider"
      style={{
        marginTop: '100px',
      }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: '50px',
          paddingLeft: '160px',
          alignItems: 'baseline',
          gap: '20px',
        }}
      >
        <h2
          style={{
            color: titleColor,
            fontFamily: 'GmarketSansBold',
            fontSize: '40px',
          }}
        >
          {title}
        </h2>
        <p>{subTitle}</p>
      </div>
      <div style={{ padding: '0 100px' }}>
        <Slider {...settings}>
          {items.map((item) => (
            <SmartCard card={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SmartSlider;
