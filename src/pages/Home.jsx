import Navigator from 'components/Navigator';
import HomeVisual from 'components/home/HomeVisual';
import Layout from 'components/Layout';

function Home() {
  return (
    <Layout>
      <Navigator isHome />
      <HomeVisual />
    </Layout>
  );
}

export default Home;
