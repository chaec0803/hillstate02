import close from 'assets/images/close.svg';
import NAVIGATOR from 'const/navigator';
import { useState } from 'react';
import {
  BASIC_DEPTH,
  GOODS_DEPTH,
  PARCEL_DEPTH,
  SPACE_DEPTH,
} from 'const/depth';
import { useNavigate } from 'react-router-dom';
import styles from './Tab.module.css';
import mobileStore from '../store/mobileStore';

function Tab() {
  const toggleTab = mobileStore((state) => state.toggleMobileTab);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(NAVIGATOR[0]);
  const getScondDepth = () => {
    if (currentPage.title === '기본정보') {
      return BASIC_DEPTH;
    }
    if (currentPage.title === '분양안내') {
      return PARCEL_DEPTH;
    }
    if (currentPage.title === '상품안내') {
      return GOODS_DEPTH;
    }
    return SPACE_DEPTH;
  };

  return (
    <>
      <div className={styles.top}>
        <img src={close} alt="close" onClick={toggleTab} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          {NAVIGATOR.map((item) => {
            return (
              <p
                className={`${styles.item} ${currentPage.title === item.title ? styles.active : ''}`}
                key={item.title}
                onClick={() => {
                  if (item.title === '기본정보') {
                    setCurrentPage(NAVIGATOR[0]);
                  } else if (item.title === '분양안내') {
                    setCurrentPage(NAVIGATOR[1]);
                  } else if (item.title === '상품안내') {
                    setCurrentPage(NAVIGATOR[2]);
                  } else if (item.title === '공간안내') {
                    setCurrentPage(NAVIGATOR[3]);
                  } else {
                    setCurrentPage(null);
                  }
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
        <div className={styles.right}>
          {getScondDepth().map((item) => {
            return (
              <p
                className={styles.item}
                key={item.title}
                onClick={() => {
                  toggleTab();
                  navigate(item.to);
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tab;
