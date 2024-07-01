import Register from 'components/Register';
import Footer from 'components/Footer';

function Layout({ children }) {
  return (
    <>
      {children}
      <Register />
      <Footer />
    </>
  );
}

export default Layout;
