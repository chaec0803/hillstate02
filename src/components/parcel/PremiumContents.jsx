import ContentsLayout from 'components/ContentsLayout';
import Title from 'components/TItle';
import ParcelInfoContainer from 'components/parcel/ParcelInfoContainer';

function ParcelContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="분양안내" secondDepth="프리미엄" />
      <ParcelInfoContainer />
    </ContentsLayout>
  );
}

export default ParcelContents;
