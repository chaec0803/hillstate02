import styles from './ContentsLayout.module.css';

function ContentsLayout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

export default ContentsLayout;
