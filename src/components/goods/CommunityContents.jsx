import Title from 'components/Title';
import ContentsLayout from 'components/ContentsLayout';
import img from 'assets/images/community.jpg';
import CommunityCaution from 'components/goods/CommunityCaution';

function CommunityContents() {
  return (
    <ContentsLayout>
      <Title firstDepth="상품안내" secondDepth="커뮤니티" />
      <img src={img} alt="layout" width="100%" height="100%" />
      <CommunityCaution />
    </ContentsLayout>
  );
}

export default CommunityContents;
