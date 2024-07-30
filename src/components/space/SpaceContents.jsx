import ContentsLayout from 'components/ContentsLayout';
import Title from 'components/Title';
import SpaceNav from 'components/space/SpaceNav';
import { useState } from 'react';
import Space from 'const/space';
import space59Top from 'assets/images/59_1.jpg';
import space59Bottom from 'assets/images/59_2.jpg';
import space70Top from 'assets/images/70_1.jpg';
import space70Bottom from 'assets/images/70_2.jpg';
import space79ATop from 'assets/images/79A_1.jpg';
import space79ABottom from 'assets/images/79A_2.jpg';
import space79BTop from 'assets/images/79B_1.jpg';
import space79BBottom from 'assets/images/79B_2.jpg';
import space84ATop from 'assets/images/84A_1.jpg';
import space84ABottom from 'assets/images/84A_2.jpg';
import space84BTop from 'assets/images/84B_1.jpg';
import space84BBottom from 'assets/images/84B_2.jpg';
import Caution from 'components/space/Caution';
import styles from './SpaceContents.module.css';

function SpaceContents() {
  const [currentSpace, setCurrentSpace] = useState(Space[0]);
  // eslint-disable-next-line consistent-return
  const getCurrentSpaceImage = () => {
    if (currentSpace === Space[0]) {
      return { top: space59Top, bottom: space59Bottom };
    }
    if (currentSpace === Space[1]) {
      return { top: space70Top, bottom: space70Bottom };
    }
    if (currentSpace === Space[2]) {
      return { top: space79ATop, bottom: space79ABottom };
    }
    if (currentSpace === Space[3]) {
      return { top: space79BTop, bottom: space79BBottom };
    }
    if (currentSpace === Space[4]) {
      return { top: space84ATop, bottom: space84ABottom };
    }
    if (currentSpace === Space[5]) {
      return { top: space84BTop, bottom: space84BBottom };
    }
  };

  return (
    <ContentsLayout>
      <Title firstDepth="공간안내" secondDepth="평면안내" />
      <SpaceNav current={currentSpace} setCurrent={setCurrentSpace} />
      <h3 className={styles.title}>{currentSpace}</h3>
      <p className={styles.type}>기본형 / 확장형</p>
      <div className={styles.img}>
        <img src={getCurrentSpaceImage().top} alt={currentSpace} width="100%" />
        <img
          src={getCurrentSpaceImage().bottom}
          alt={currentSpace}
          width="100%"
        />
      </div>
      <Caution />
    </ContentsLayout>
  );
}

export default SpaceContents;
