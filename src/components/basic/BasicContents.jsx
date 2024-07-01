import ContentsLayout from 'components/ContentsLayout';
import Title from 'components/Title';
import basic from 'assets/images/basic.jpg';
import Caution from 'components/basic/Caution';
import styles from './BasicContents.module.css';

function BasicContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="기본정보" secondDepth="입지환경" />
      <img src={basic} alt="입지환경" className={styles.basic_img} />
      <Caution />
    </ContentsLayout>
  );
}

export default BasicContents;
