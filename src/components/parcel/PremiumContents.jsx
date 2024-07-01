import ContentsLayout from 'components/ContentsLayout';
import Title from 'components/Title';
import PremiumInfoContainer from 'components/parcel/PremiumInfoContainer';

function PremiumContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="분양안내" secondDepth="프리미엄" />
      <PremiumInfoContainer />
    </ContentsLayout>
  );
}

export default PremiumContents;
