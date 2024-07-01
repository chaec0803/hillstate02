import React from 'react';
import Layout from 'components/Layout';
import Navigator from 'components/Navigator';
import BasicContents from 'components/basic/BasicContents';

function Basic() {
  return (
    <Layout>
      <Navigator />
      <BasicContents />
    </Layout>
  );
}

export default Basic;
