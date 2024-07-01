import Layout from 'components/Layout';
import Navigator from 'components/Navigator';
import SpaceContents from 'components/space/SpaceContents';

function Space() {
  return (
    <Layout>
      <Navigator />
      <SpaceContents />
    </Layout>
  );
}

export default Space;
