import Title from 'components/Title';
import ContentsLayout from 'components/ContentsLayout';
import SmartSlider from 'components/goods/SmartSlider';
import { COMFORTABLE, LIFE, VARIOUS } from 'const/smart';
import SmartCaution from 'components/goods/SmartCaution';

function SmartContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="상품안내" secondDepth="스마트시스템" />
      <SmartSlider
        title="STYLISH LIFE"
        titleColor="#127D7F"
        subTitle="첨단, 디자인, 맞춤"
        items={LIFE}
        slidesToShow={3}
      />
      <SmartSlider
        title="VARIOUS"
        titleColor="#3978BB"
        subTitle="소통, 건강"
        items={VARIOUS}
        slidesToShow={2}
      />
      <SmartSlider
        title="COMFORTABLE"
        titleColor="#CE686C"
        subTitle="편리, 안전, 보건, 위생"
        items={COMFORTABLE}
        slidesToShow={2}
      />
      <SmartCaution />
    </ContentsLayout>
  );
}

export default SmartContents;
