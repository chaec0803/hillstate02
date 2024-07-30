import HomeVisual from 'components/home/HomeVisual';
import Layout from 'components/Layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    const redirectPath = queryParams.get('redirect');

    if (redirectPath) {
      navigate(redirectPath);
    }
  }, []);

  return (
    <Layout>
      <HomeVisual />
    </Layout>
  );
}

export default Home;
