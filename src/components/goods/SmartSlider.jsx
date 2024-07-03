import Slider from 'react-slick';
import SmartCard from 'components/goods/SmartCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

function SmartSlider({ title, titleColor, subTitle, items }) {
  const isDesktop = useMediaQuery({ minWidth: 900 });
  const settings = {
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: false,
    draggable: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          flexDirection: !isDesktop ? 'column' : 'row',
          marginBottom: '50px',
          paddingLeft: isDesktop ? '160px' : '20px',
          alignItems: 'baseline',
          gap: '20px',
        }}
      >
        <h2
          style={{
            color: titleColor,
            fontFamily: 'GmarketSansBold',
            fontSize: '2.5rem',
          }}
        >
          {title}
        </h2>
        <p>{subTitle}</p>
      </div>
      <div style={{ padding: isDesktop ? '0 100px' : '' }}>
        <Slider {...settings}>
          {items.map((item) => (
            <SmartCard card={item} key={item.title} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SmartSlider;
