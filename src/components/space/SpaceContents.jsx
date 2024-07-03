import ContentsLayout from 'components/ContentsLayout';
import Title from 'components/Title';
import SpaceNav from 'components/space/SpaceNav';
import { useState } from 'react';
import Space from 'const/space';
import space01 from 'assets/images/space01.jpg';
import space02 from 'assets/images/space02.jpg';
import space03 from 'assets/images/space03.jpg';
import space04 from 'assets/images/space04.jpg';
import space05 from 'assets/images/space05.jpg';
import space06 from 'assets/images/space06.jpg';
import Caution from 'components/space/Caution';
import styles from './SpaceContents.module.css';

function SpaceContents() {
  const [currentSpace, setCurrentSpace] = useState(Space[0]);
  // eslint-disable-next-line consistent-return
  const getCurrentSpaceImage = () => {
    if (currentSpace === Space[0]) {
      return space01;
    }
    if (currentSpace === Space[1]) {
      return space02;
    }
    if (currentSpace === Space[2]) {
      return space03;
    }
    if (currentSpace === Space[3]) {
      return space04;
    }
    if (currentSpace === Space[4]) {
      return space05;
    }
    if (currentSpace === Space[5]) {
      return space06;
    }
  };

  return (
    <ContentsLayout>
      <Title firstDepth="공간안내" secondDepth="평면안내" />
      <SpaceNav current={currentSpace} setCurrent={setCurrentSpace} />
      <h3 className={styles.title}>{currentSpace}</h3>
      <p className={styles.type}>기본형 / 확장형</p>
      <div className={styles.img}>
        <img src={getCurrentSpaceImage()} alt={currentSpace} width="100%" />
      </div>
      <Caution />
    </ContentsLayout>
  );
}

export default SpaceContents;
