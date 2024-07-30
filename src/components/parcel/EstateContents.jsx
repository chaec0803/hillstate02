import ContentsLayout from 'components/ContentsLayout';
import Title from 'components/Title';
import img from 'assets/images/estate.jpg';
import EatateCaution from './EatateCaution';

function EstateContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="분양안내" secondDepth="단지배치도" />
      <img src={img} alt="layout" width="100%" height="100%" />
      <EatateCaution />
    </ContentsLayout>
  );
}

export default EstateContents;
