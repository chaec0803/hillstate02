import ContentsLayout from 'components/ContentsLayout';
import Title from 'components/Title';
import img from 'assets/images/layout.jpg';
import Caution from 'components/parcel/Caution';

function LayoutContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="분양안내" secondDepth="동·호수배치도" />
      <img src={img} alt="layout" width="100%" height="100%" />
      <Caution />
    </ContentsLayout>
  );
}

export default LayoutContents;
