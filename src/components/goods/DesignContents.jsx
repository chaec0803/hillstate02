import Title from 'components/Title';
import ContentsLayout from 'components/ContentsLayout';
import img from 'assets/images/design.jpg';
import DesignCaution from 'components/goods/DesignCaution';

function DesignContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="상품안내" secondDepth="단지설계" />
      <img src={img} alt="layout" width="100%" height="100%" />
      <DesignCaution />
    </ContentsLayout>
  );
}

export default DesignContents;
