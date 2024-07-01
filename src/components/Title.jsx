import styles from './Title.module.css';

function Title({ firstDepth, secondDepth }) {
  return (
    <div className={styles.title}>
      <p>{firstDepth}</p>
      <span>{'>'}</span>
      <p>{secondDepth}</p>
    </div>
  );
}

export default Title;
