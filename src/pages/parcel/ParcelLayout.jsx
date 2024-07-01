import Navigator from 'components/Navigator';
import Layout from 'components/Layout';
import LayoutContents from 'components/parcel/LayoutContents';

function ParcelLayout() {
  return (
    <Layout>
      <Navigator />
      <LayoutContents />
    </Layout>
  );
}

export default ParcelLayout;
