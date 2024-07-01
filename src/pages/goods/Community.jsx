import Layout from 'components/Layout';
import Navigator from 'components/Navigator';
import CommunityContents from 'components/goods/CommunityContents';

function Community() {
  return (
    <Layout>
      <Navigator />
      <CommunityContents />
    </Layout>
  );
}

export default Community;
