import { Link } from 'react-router-dom';
import NAVIGATOR from 'const/navigator.js';
import { useState } from 'react';
import { GOODS_DEPTH, PARCEL_DEPTH } from 'const/depth';
import styles from './Navigator.module.css';

function Navigator({ isHome = false }) {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <div
      className={`${styles.header} ${!isHome ? styles.not_home : ''}`}
      onMouseLeave={() => {
        setCurrentPage(null);
      }}
    >
      <div className={styles.header_wrap}>
        <h1 className={styles.logo}>
          <Link to="/">
            <p>힐스테이트 가장더퍼스트</p>
          </Link>
        </h1>
        <div className={styles.light}>
          <nav>
            <ul>
              {NAVIGATOR.map((item) => (
                <li className={styles.nav_li} key={item.title}>
                  <Link
                    to={item.to}
                    onMouseEnter={() => {
                      if (item.title === '분양안내') {
                        setCurrentPage(PARCEL_DEPTH);
                      } else if (item.title === '상품안내') {
                        setCurrentPage(GOODS_DEPTH);
                      } else {
                        setCurrentPage(null);
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.round}>
            <p>빠른상담문의</p>
          </div>
        </div>
      </div>
      {currentPage && (
        <div className={`${styles.header_wrap} ${styles.second_depth}`}>
          <nav>
            <ul>
              {currentPage.map((item) => (
                <li className={styles.nav_li} key={item.title}>
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navigator;
