import Footer from 'components/Footer';
import Interest from 'components/Interest';
import Navigator from 'components/Navigator';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileNavigator from 'components/MobileNavigator';
import Tab from 'components/Tab';
import mobileStore from '../store/mobileStore';

function Layout({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 1020 });
  const { pathname } = useLocation();
  const isOpenMobileTab = mobileStore((state) => state.isOpenMobileTab);

  return !isOpenMobileTab ? (
    <>
      {isDesktop ? (
        <Navigator isHome={pathname === '/'} />
      ) : (
        <MobileNavigator isHome={pathname === '/'} />
      )}
      {children}
      <Interest />
      <Footer />
    </>
  ) : (
    <Tab />
  );
}

export default Layout;
